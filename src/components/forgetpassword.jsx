import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './forgetpassword.css';

const ResetPassword = () => {
  // State hooks for form fields and UI state
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    // Simple client-side validation: ensure the passwords match
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      // Fetch the list of users from your Firebase API endpoint
      const res = await axios.get(
        'https://eastrent-f7be6-default-rtdb.firebaseio.com/user.json'
      );
      const usersData = res.data;

      if (!usersData) {
        setError('No users found in the database');
        setLoading(false);
        return;
      }

      // Convert the returned object into an array of user objects with their keys
      const usersArray = Object.entries(usersData).map(([id, user]) => ({
        id,
        ...user,
      }));

      // Find the user with the matching email (case-insensitive)
      const matchedUser = usersArray.find(
        (user) => user.email.toLowerCase() === email.toLowerCase()
      );

      if (!matchedUser) {
        setError('No user found with the provided email');
        setLoading(false);
        return;
      }

      // Update the user's password using a PATCH request to the specific user endpoint
      await axios.patch(
        `https://eastrent-f7be6-default-rtdb.firebaseio.com/user/${matchedUser.id}.json`,
        { password: newPassword }
      );

      setMessage('Password has been updated successfully!');

      // Optionally, navigate to the login page after a short delay (3 seconds)
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      console.error(err);
      setError('Failed to update password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-card">
        <h2 className="reset-password-title">Reset Your Password</h2>
        <form onSubmit={handleSubmit} className="reset-password-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className='sub-butt'> {error && <div className="error-message">{error}</div>}
          {message && <div className="success-message">{message}</div>}
          <button type="submit" className="submit-butt"   disabled={loading}>
            {loading ? 'Processing...' : 'Reset Password'}
          </button></div>
         
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
