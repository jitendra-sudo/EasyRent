import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import './editProfile.css';

const ProfileEdit = () => {
  const [userId, setUserId] = useState('');
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('tenant');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Fetch user data and load stored avatar (if any)
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const userLogin = localStorage.getItem('userlogin');
        if (!userLogin) {
          setError('User not logged in.');
          setLoading(false);
          return;
        }

        const loginData = JSON.parse(userLogin);
        const loginEmail = (loginData.Email || loginData.email).toLowerCase();

        // Load the stored avatar from localStorage
        const storedAvatar = localStorage.getItem('avatar');
        if (storedAvatar) {
          setAvatar(storedAvatar);
        }

        const res = await axios.get(
          'https://eastrent-f7be6-default-rtdb.firebaseio.com/user.json'
        );
        const usersData = res.data;

        if (!usersData) {
          setError('No user data found.');
          setLoading(false);
          return;
        }

        const usersArray = Object.entries(usersData).map(([id, user]) => ({
          id,
          ...user,
        }));
        const matchedUser = usersArray.find(
          (user) => user.email.toLowerCase() === loginEmail
        );

        if (!matchedUser) {
          setError('User not found.');
          setLoading(false);
          return;
        }

        setUserId(matchedUser.id);
        setName(matchedUser.name || '');
        setUsername(matchedUser.username || '');
        setEmail(matchedUser.email || '');
        setPhone(matchedUser.phone || '');
        setPassword(matchedUser.password || '');
        setRole(matchedUser.role || 'tenant');
      } catch (err) {
        console.error(err);
        setError('Failed to load user data.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Function to handle image selection and saving it as a Data URL
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Optional: Validate file type here (e.g., image/jpeg, image/png)
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataURL = reader.result;
        localStorage.setItem('avatar', dataURL);
        setAvatar(dataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission to update the profile details
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);
    try {
      const updatedData = { name, username, email, phone, password, role };
      await axios.patch(
        `https://eastrent-f7be6-default-rtdb.firebaseio.com/user/${userId}.json`,
        updatedData
      );
      setMessage('Profile updated successfully!');
    } catch (err) {
      console.error(err);
      setError('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-edit-container">
      <div className="profile-edit-card">
        <h2 className="profile-edit-title">Edit Profile</h2>
        {loading && <p>Loading...</p>}
        {error && <div className="error-message">{error}</div>}
        {message && <div className="success-message">{message}</div>}

     
        {/* Clickable label that opens the hidden file input */}
        <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
        <Avatar  src={avatar} alt={name} className="profile-avatar" sx={{ width: 100, height: 100, margin: '0 auto', marginBottom: '1rem' }} /> </label>
        <input id="file-upload" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />

        {/* Profile edit form */}
        <form onSubmit={handleSubmit} className="profile-edit-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>
    
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
