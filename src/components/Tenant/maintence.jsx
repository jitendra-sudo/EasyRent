import { useState, useRef } from 'react';
import './maintence.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MaintenanceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    unitNumber: '',
    issueLocation: 'Kitchen',
    description: '',
    urgency: 'Medium',
    preferredDate: ''
  });

  const [attachments, setAttachments] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formPayload = new FormData();
    
    // Append form data
    Object.entries(formData).forEach(([key, value]) => {
      formPayload.append(key, value);
    });

    // Append files
    attachments.forEach(file => {
      formPayload.append('attachments', file);
    });

    // Here you would typically send to API
    console.log('Form data:', Object.fromEntries(formPayload));
    
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
    toast.success('Request submitted successfully! We will respond shortly.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    resetForm();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => 
      file.type.startsWith('image/') || 
      file.type.startsWith('video/') ||
      file.type === 'application/pdf'
    );
    setAttachments(prev => [...prev, ...validFiles]);
  };

  const removeAttachment = (index) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      unitNumber: '',
      issueLocation: 'Kitchen',
      description: '',
      urgency: 'Medium',
      preferredDate: ''
    });
    setAttachments([]);
    if(fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div id='maintencer' className="form-container">
      <h2 className="form-title">Maintenance Request Form</h2>
      <ToastContainer position="top-center"  autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-field">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-field">
          <label className="form-label">Unit Number:</label>
          <input
            type="text"
            name="unitNumber"
            value={formData.unitNumber}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-field">
          <label className="form-label">Issue Location:</label>
          <select
            name="issueLocation"
            value={formData.issueLocation}
            onChange={handleChange}
            className="form-select"
          >
            <option value="Kitchen">Kitchen</option>
            <option value="Bathroom">Bathroom</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Living Room">Living Room</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-field">
          <label className="form-label">Description of Issue:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="form-textarea"
          />
        </div>

        <div className="form-field">
          <label className="form-label">Urgency:</label>
          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="form-select"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Emergency">Emergency</option>
          </select>
        </div>

        <div className="form-field">
          <label className="form-label">Preferred Date:</label>
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="file-upload-container">
          <label className="file-upload-label">
            Upload Evidence (Photos/Video/PDF)
            <input
              type="file"
              className="file-input"
              ref={fileInputRef}
              onChange={handleFileUpload}
              multiple
              accept="image/*, video/*, application/pdf"
            />
          </label>
          
          <div className="file-preview-container">
            {attachments.map((file, index) => (
              <div key={index} className="file-preview">
                {file.type.startsWith('image/') ? (
                  <img 
                    src={URL.createObjectURL(file)} 
                    alt={file.name}
                  />
                ) : (
                  <div className="file-name">{file.name}</div>
                )}
                <button 
                  type="button" 
                  className="remove-file"
                  onClick={() => removeAttachment(index)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-button">
          Submit Request
        </button>
      </form>

      {showConfirmation && (
        <div className="confirmation-message">
          Thank you for your submission! We'll respond shortly.
        </div>
      )}
    </div>
  );
};

export default MaintenanceForm;