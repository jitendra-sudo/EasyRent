import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "./MaintenanceCommunication.css"; // Import CSS

const REQUESTS_API =
  "https://rent-bc133-default-rtdb.asia-southeast1.firebasedatabase.app/Landlorddb/maintenance_requests.json";
const MESSAGES_API =
  "https://rent-bc133-default-rtdb.asia-southeast1.firebasedatabase.app/Landlorddb/messages.json";

const MaintenanceCommunication = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTenant, setSelectedTenant] = useState(null);
  const [messages, setMessages] = useState([]); // ✅ Ensuring it's always an array
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(REQUESTS_API);
        if (response.data) {
          const requestList = Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key],
          }));
          setRequests(requestList);
        } else {
          setRequests([]);
        }
      } catch (error) {
        console.error("Error fetching maintenance requests:", error);
        setRequests([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const updateRequestStatus = async (id, status) => {
    try {
      await axios.patch(`${REQUESTS_API.replace(".json", `/${id}.json`)}`, { status });

      setRequests((prev) =>
        prev.map((req) => (req.id === id ? { ...req, status } : req))
      );
    } catch (error) {
      console.error("Error updating request status:", error);
    }
  };

  const fetchMessages = async (tenantName) => {
    try {
      const response = await axios.get(MESSAGES_API);
      if (response.data && response.data[tenantName]) {
        const tenantMessages = response.data[tenantName];

        // ✅ Ensure messages is an array
        setMessages(Array.isArray(tenantMessages) ? tenantMessages : Object.values(tenantMessages));
      } else {
        setMessages([]); // ✅ Always set as an array
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
      setMessages([]); // ✅ Always fallback to an array
    }
  };

  const handleSelectTenant = (tenantName) => {
    setSelectedTenant(tenantName);
    fetchMessages(tenantName);
  };

  const handleSendMessage = async () => {
    if (!selectedTenant || !newMessage.trim()) return;

    const newMsg = {
      sender: "Landlord",
      message: newMessage,
      timestamp: new Date().toISOString(),
    };

    try {
      await axios.post(`${MESSAGES_API.replace(".json", `/${selectedTenant}.json`)}`, newMsg);

      setMessages((prevMessages) => [...prevMessages, newMsg]); // ✅ Ensure `messages` is updated safely
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="maintenance-container">
      <Sidebar />
      <div className="maintenance-content">
        <h1 className="maintenance-title">Maintenance & Communication</h1>
        <div className="maintenance-grid">
          <div className="maintenance-requests">
            <h2>Maintenance Requests</h2>
            {loading ? (
              <p>Loading...</p>
            ) : requests.length > 0 ? (
              requests.map((request) => (
                <div key={request.id} className="request-card">
                  <p><strong>Tenant:</strong> {request.tenant_name}</p>
                  <p><strong>Property:</strong> {request.property}</p>
                  <p><strong>Issue:</strong> {request.description}</p>
                  <p className={`status ${request.status === "Pending" ? "pending" : "resolved"}`}>
                    Status: {request.status}
                  </p>
                  <div className="request-buttons">
                    <button className="resolve-btn" onClick={() => updateRequestStatus(request.id, "Resolved")}>
                      Mark as Resolved
                    </button>
                    <button className="progress-btn" onClick={() => updateRequestStatus(request.id, "In Progress")}>
                      In Progress
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No maintenance requests available.</p>
            )}
          </div>

          <div className="communication-section">
            <h2>Tenant Communication</h2>
            <select className="tenant-select" onChange={(e) => handleSelectTenant(e.target.value)}>
              <option value="">Select Tenant</option>
              {requests.map((request) => (
                <option key={request.id} value={request.tenant_name}>{request.tenant_name}</option>
              ))}
            </select>
            <div className="messages-box">
              {messages.length > 0 ? (
                messages.map((msg, index) => (
                  <div key={index} className={`message ${msg.sender === "Landlord" ? "landlord" : "tenant"}`}>
                    <p><strong>{msg.sender}:</strong> {msg.message}</p>
                  </div>
                ))
              ) : (
                <p>No messages.</p>
              )}
            </div>
            <div className="message-input">
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button className="send-btn" onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceCommunication;
