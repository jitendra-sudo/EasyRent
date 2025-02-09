import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "./PropertyManagement.css"; // Importing normal CSS

const API_URL =
  "https://rent-bc133-default-rtdb.asia-southeast1.firebasedatabase.app/Landlorddb/properties.json";

const MyProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProperty, setNewProperty] = useState({
    name: "",
    address: "",
    rent: "",
    status: "Occupied",
    image: "",
    description: "",
  });

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(API_URL);
        if (response.data) {
          const propertyList = Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key],
          }));
          setProperties(propertyList);
        } else {
          setProperties([]);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const handleManage = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProperty(null);
  };

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setSelectedProperty((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!selectedProperty || !selectedProperty.id) return;

    try {
      await axios.patch(
        `${API_URL.replace(".json", `/${selectedProperty.id}.json`)}`,
        selectedProperty
      );

      setProperties((prev) =>
        prev.map((prop) => (prop.id === selectedProperty.id ? selectedProperty : prop))
      );
      setShowModal(false);
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };

  const handleAddProperty = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, newProperty);
      if (response.data) {
        setProperties([...properties, { id: response.data.name, ...newProperty }]);
        setShowAddForm(false);
        setNewProperty({
          name: "",
          address: "",
          rent: "",
          status: "Occupied",
          image: "",
          description: "",
        });
      }
    } catch (error) {
      console.error("Error adding property:", error);
    }
  };

  return (
    <div className="properties-container">
      <Sidebar />
      <div className="properties-content">
        <h1 className="properties-title">My Properties</h1>
        <button className="add-property-btn" onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? "Cancel" : "Add Property"}
        </button>

        {showAddForm && (
          <form onSubmit={handleAddProperty} className="property-form">
            <input
              type="text"
              placeholder="Property Name"
              value={newProperty.name}
              onChange={(e) => setNewProperty({ ...newProperty, name: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Address"
              value={newProperty.address}
              onChange={(e) => setNewProperty({ ...newProperty, address: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Rent"
              value={newProperty.rent}
              onChange={(e) => setNewProperty({ ...newProperty, rent: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newProperty.image}
              onChange={(e) => setNewProperty({ ...newProperty, image: e.target.value })}
            />
            <textarea
              placeholder="Description"
              value={newProperty.description}
              onChange={(e) => setNewProperty({ ...newProperty, description: e.target.value })}
            />
            <button type="submit">Submit</button>
          </form>
        )}

        {loading ? (
          <p className="loading-text">Loading...</p>
        ) : properties.length > 0 ? (
          <div className="properties-grid">
            {properties.map((property) => (
              <div key={property.id} className="property-card">
                {property.image ? (
                  <img src={property.image} alt={property.name} className="property-image" />
                ) : (
                  <div className="no-image">No Image</div>
                )}
                <h2>{property.name}</h2>
                <p>{property.address}</p>
                <p>Rent: ₹{property.rent}</p>
                <p>Status: {property.status}</p>
                <button className="manage-btn" onClick={() => handleManage(property)}>
                  Manage
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No properties available.</p>
        )}

        {showModal && selectedProperty && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Manage Property</h2>
              <input type="text" name="name" value={selectedProperty.name} onChange={handleUpdate} />
              <input type="text" name="rent" value={selectedProperty.rent} onChange={handleUpdate} />
              <div className="modal-actions">
                <button className="close-btn" onClick={handleClose}>Close</button>
                <button className="save-btn" onClick={handleSave}>Save Changes</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProperties;
