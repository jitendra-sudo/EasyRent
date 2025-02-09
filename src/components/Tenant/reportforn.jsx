import { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './reportform.css';

const ReportForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    reportType: 'incident',
    description: '',
    date: '',
    location: '',
    severity: 'medium',
    anonymous: false,
  });

  const [attachments, setAttachments] = useState([]);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formPayload.append(key, value);
    });
    
    attachments.forEach(file => {
      formPayload.append('attachments', file);
    });

    // Simulate API call
    setTimeout(() => {
      toast.success('Report submitted successfully!', {
        position: "top-center",
        autoClose: 3000,
      });
      resetForm();
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => 
      file.type.startsWith('image/') || 
      file.type.startsWith('video/') ||
      file.type === 'application/pdf'
    );
    
    if (validFiles.length < files.length) {
      toast.error('Only images, videos, and PDFs are allowed');
    }
    
    setAttachments(prev => [...prev, ...validFiles]);
  };

  const removeAttachment = (index) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      reportType: 'incident',
      description: '',
      date: '',
      location: '',
      severity: 'medium',
      anonymous: false,
    });
    setAttachments([]);
    if(fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div id='reporter' className="report-container">
      <h2 className="report-title">Incident Report Form</h2>
      <ToastContainer />
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Report Title*</label>
          <input className='inputy'
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Report Type*</label>
          <select className='selecty'
            name="reportType"
            value={formData.reportType}
            onChange={handleChange}
          >
            <option value="incident">Incident</option>
            <option value="safety">Safety Concern</option>
            <option value="harassment">Harassment</option>
            <option value="damage">Property Damage</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Incident Date/Time*</label>
          <input className='inputy'
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Location*</label>
          <input className='inputy'
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Severity Level*</label>
          <div className="severity-options">
            {['low', 'medium', 'high', 'critical'].map(level => (
              <label key={level}>
                <input className='inputy'
                  type="radio"
                  name="severity"
                  value={level}
                  checked={formData.severity === level}
                  onChange={handleChange}
                />
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Detailed Description*</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="file-upload-label">
            Upload Evidence
            <input className='inputy'
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              multiple
              accept="image/*, video/*, application/pdf"
            />
          </label>
          
          <div className="file-previews">
            {attachments.map((file, index) => (
              <div key={index} className="file-preview">
                {file.type.startsWith('image/') ? (
                  <img src={URL.createObjectURL(file)} alt={file.name} />
                ) : (
                  <div className="file-info">
                    <span>{file.name}</span>
                    <span>({file.type})</span>
                  </div>
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

        <div className="form-group checkbox-group">
          <label>
            <input className='inputy'
              type="checkbox"
              name="anonymous"
              checked={formData.anonymous}
              onChange={handleChange}
            />
            Submit Anonymously
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default ReportForm;