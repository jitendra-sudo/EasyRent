import React, { useState } from 'react';
import logo from './black-bg.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './home.css';
import About from './about';
import Services from './services';
import Developer from './developer';
// import background from './backimg.jpg'

export const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [emaillogin, setEmaillogin] = useState("");
  const [passwordlogin, setPasswordlogin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [authStatus, setAuthStatus] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    let data = { Email: emaillogin, Password: passwordlogin };
    try {
      const response = await axios.post('YOUR_LOGIN_API_ENDPOINT', data);
      console.log(response.data);
      navigate('/Dashboard');
      setEmaillogin("");
      setPasswordlogin("");
    } catch (error) {
      console.error('Login failed', error);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = () => {
    setAuthStatus(false);
  };

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userData = { Name: name, Username: username, Email: email, Phone: phone, Password: password };

    try {
      let res = await axios.post('YOUR_SIGNUP_API_ENDPOINT', userData);
      console.log(res.data);
      setName('');
      setUsername('');
      setEmail('');
      setPhone('');
      setPassword('');
    } catch (error) {
      setError("Some problem in data send");
      alert("Some problem in data send");
    } finally {
      setLoading(false);
    }
  };

  const handleLoginswitch = () => {
    setAuthStatus(true);
  };

  return (
    <>
      <div className="H-container">
        <header id='H-header'>
          <div className='H-Img'>
            <img src={logo} alt='logo' />
          </div>

          <nav className="H-nav-bar">
            <a href='#Home'>Home</a>
            <a href='#about'>About</a>
            <a href='#services'>Services</a>
            <a href='#developers'>Developers</a>
          </nav>
        </header>
        <main id='Home'  >
          <div className='Home-page'>
            <div  className='H-title'>
              <h2 className="about-title">Tenant-Landlord <span>Connect</span> </h2>   
             <div className='subtitle' ></div>
              <p>Streamline Your Rental Experience with Easy, Secure, and</p>
              <p> Instant Messaging</p>
            </div>

            <div className='Home-Auth'>
              {authStatus ? (
                <div className='login'>
                  <h1 id="Login-Heading">Login</h1>
                  <form onSubmit={handleLogin}>
                    <label className="label2" htmlFor="username">Email :</label>
                    <input className="enter20" type='email' id="username" placeholder="Enter Your email" value={emaillogin} onChange={(e) => setEmaillogin(e.target.value)} />

                    <label className="label2" htmlFor="password">Password :</label>
                    <input className="enter20" type="password" id="password" placeholder="Enter Your password" value={passwordlogin} onChange={(e) => setPasswordlogin(e.target.value)} />

                    <button type="button" id="forgetbtn" onClick={() => navigate('/forget')}>Forget Password?</button>

                    <button className="enter20" id="submit" type="submit" disabled={loading}>
                      {loading ? "Logging in..." : "Login"}
                    </button>

                    {error && <p className="error">{error}</p>}

                    <div className="create">
                      <label className="label3" htmlFor="sign">Don't have an account?</label>
                      <button id="sign" type="button" onClick={handleSignup}>Signup</button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className='H-Signup'>
                  <h1 className='Signup-Heading'>Sign Up</h1>
                  <form id='form' onSubmit={handleSubmitSignup}>
                    <label className='label1' htmlFor="name">Name</label>
                    <input type="text" className='enter' id="name" name="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />

                    <label className='label1' htmlFor="username">Username</label>
                    <input type="text" className='enter' id="username" name="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required />

                    <label className='label1' htmlFor="email">Email</label>
                    <input type="email" className='enter' id="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label className='label1' htmlFor="phone">Phone number</label>
                    <input type="text" className='enter' id="phone" name="phone" placeholder="Enter your phone" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={10} required />

                    <label className='label1' htmlFor="password">Password</label>
                    <input type="password" className='enter' id="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <button type="submit" id="aount" disabled={loading}>
                      {loading ? 'Creating Account...' : 'Create Account'}
                    </button>

                    <div className="loginpage">
                      <label htmlFor="loginswitch">Already have an account?</label>
                      <button onClick={handleLoginswitch} id="loginswitch">Login</button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      <About/>
      <Services/>
      <Developer />

     <footer>
      <div className="footer">
      <p> Copyright  2025. All rights reserved.</p>
      </div>
     </footer>
    </>
  );
};

export default Home;