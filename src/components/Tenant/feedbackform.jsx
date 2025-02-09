import { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './feedbackform.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: 'general',
    rating: '',
    message: '',
    subscribe: false
  });

  const [attachments, setAttachments] = useState([]);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.message || !formData.rating) {
      toast.error('Please fill required fields');
      return;
    }

    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formPayload.append(key, value);
    });

    attachments.forEach(file => {
      formPayload.append('attachments', file);
    });

    toast.success('Thank you for your feedback!');
    resetForm();
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
      feedbackType: 'general',
      rating: '',
      message: '',
      subscribe: false
    });
    setAttachments([]);
    if(fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">Customer Feedback Form</h2>
      <ToastContainer />
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Name</label>
          <input className='inputy'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input className='inputy'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Feedback Type*</label>
          <select className='selecty'
            name="feedbackType"
            value={formData.feedbackType}
            onChange={handleChange}
            required
          >
            <option value="general">General Feedback</option>
            <option value="product">Product Feedback</option>
            <option value="service">Service Feedback</option>
            <option value="suggestion">Suggestions</option>
            <option value="complaint">Complaint</option>
          </select>
        </div>

        <div className="form-group">
          <label>Rating*</label>
          <select className='selecty'
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value="">Select Rating</option>
            <option value="5">Excellent</option>
            <option value="4">Very Good</option>
            <option value="3">Good</option>
            <option value="2">Fair</option>
            <option value="1">Poor</option>
          </select>
        </div>

        <div className="form-group">
          <label>Your Feedback*</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Please provide detailed feedback..."
          />
        </div>

        <div className="form-group">
          <label className="file-upload-label">
            Upload Supporting Documents
            <input className='inputy'
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              multiple
              accept="image/*, application/pdf"
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
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
            Subscribe to our newsletter
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;