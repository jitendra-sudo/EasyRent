import React from 'react'
import { useState ,useEffect } from 'react';
import './dashboard.css'
import { FaHome, FaTachometerAlt , FaEnvelope, FaMoneyBillWave, FaTools, FaSearch, FaRegFlag, FaComment, FaFileAlt, FaBell } from 'react-icons/fa';
import { MdOutlineDashboard , MdOutlineBugReport , MdOutlineSettings, MdOutlineVerified  } from "react-icons/md";
import logo from './black-bg.png'
import { FcPaid } from "react-icons/fc";
import { IoIosNotifications } from "react-icons/io";
import Avatar from '@mui/material/Avatar';
import faker from 'faker';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



// notification 

const useNotifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Rent payment due in 3 days', read: false },
    { id: 2, text: 'Maintenance request approved', read: false },
  ]);

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  return { notifications, markAsRead };
};


function dashboard() {
  const navigate = useNavigate()
   const [search ,setSearch] = useState('')
   const [language , setLanguage] = useState('')
   const [rentData, setRentData] = useState({});
   const { notifications, markAsRead } = useNotifications();
   const [messages, setMessages] = useState([]);
   const [status , setStatus ]  = useState(false)
   const [profilephoto , setProfilePhoto] = useState('')
   const [profileName , setProfileName] = useState('') 
   const [paymenthistory , setPaymentHistory] = useState( [ { "id": "e5c2d83d-b710-4d8f-bf2e-1111e5d7fbb3", "name": "John Doe", "amount": 1200, "transaction_id": "a1b2c3d4e5f6g7h8i9j0", "date": "2025-01-01" }, { "id": "8dca1bc6-b21a-46d8-bd93-123456781234", "name": "Jane Smith", "amount": 1200, "transaction_id": "z9y8x7w6v5u4t3s2r1q0",  "date": "2025-02-01" }, {  "id": "ba9b64a9-87cd-4c0e-b722-555555d55555",  "name": "Alex Johnson", "amount": 1200,  "transaction_id": "p1q2r3s4t5u6v7w8x9y0",  "date": "2025-03-01" }, { "id": "d654fc8b-e585-4c70-a0df-8888bbddc66f", "name": "Emily White", "amount": 1200,  "transaction_id": "r7s8t9u0v1w2x3y4z5a6", "date": "2025-04-01" } ] )
  
 
   useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userLogin = localStorage.getItem('userlogin');
        if (!userLogin) {
          console.error('User not logged in.');
          return;
        }
        const loginData = JSON.parse(userLogin);
        const loginEmail = (loginData.Email || loginData.email).toLowerCase();
        const res = await axios.get(
          'https://eastrent-f7be6-default-rtdb.firebaseio.com/user.json'
        );
        const usersData = res.data;
  
        if (!usersData) {
          console.error('No user data found.');
          return;
        }
  
        const usersArray = Object.entries(usersData).map(([id, user]) => ({
          id,
          ...user,
        }));
        const matchedUser = usersArray.find(
          (user) => user.email.toLowerCase() === loginEmail
        );
        
        if (matchedUser) {
          setProfileName(matchedUser.name);
        } else {
          console.error('User not found.');
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchUserData();
  }, []);
  












   const handleRentStatus = () => {
    setRentData((prevRentData) => ({...prevRentData, paid: true, current:0 ,  dueDate: '2023-09-05'}));
 };
  


 useEffect(() => {
  
  const storedAvatar = localStorage.getItem('avatar');
  if (storedAvatar) {
    setProfilePhoto(storedAvatar);
  }
}, []);

    
 const lightClass = rentData.paid ? 'green-blink' : 'red-blink';

   const HandleSearch = () =>{
    console.log(search)
   }

 setTimeout(() => {
     
    setRentData({
           current: 1200,
           name: faker.name.findName() ,
           dueDate: '2023-08-05',
           paid:false,
           history: Array.from({ length: 6 }, (_, i) => ({
           month: faker.date.month(),
           amount: faker.finance.amount(1000, 1500, 2)
        }))
      }) 
  
    } ,10000)


     useEffect(() => {
   
    setMessages(Array.from({ length: 5 }, () => ({
      id: faker.datatype.uuid(),
      sender: faker.name.findName(),
      preview: faker.lorem.sentence(),
      timestamp: faker.date.recent()
    })));
  }, []);



  return (
    <div id='Tenantdashboard' >
    
      <div className='dash-slider'>
          
      <div className='dashImg'>
         <img src={logo} alt='logo'/>
      </div>
         
          
 <div className='dash-link'>
               

     <Link className='LINKed' to='/' ><MdOutlineDashboard className='dash-icon' /> <span>Dashboard</span></Link>
       <Link className='LINKed' to='/chatbox' >   <FaEnvelope className='dash-icon' /> <span>Message</span>    </Link> 
      <Link className='LINKed' to='/maintenance' >   <FaTools className='dash-icon' /> <span>Maintenance</span>    </Link> 
      <Link className='LINKed' to='/reportForm' >    <FaRegFlag className='dash-icon'/> <span>Report</span>   </Link>  
     <Link className='LINKed' to='/feedbackForm' >  <FaComment className='dash-icon'/> <span>Feedback</span>      </Link>
      <Link className='LINKed' to='/leaseStatus' >     <FaFileAlt className='dash-icon'/> <span>Lease Status</span>   </Link> 
      <Link className='LINKed' to='' ><MdOutlineSettings className='dash-icon'/> <span>Settings</span></Link>
     
 </div>
      </div>


      {/* header navbar */}

      <div className='dash-navbar'>

      <div className='tenant-navbar'>

      {/* <div className='dashImg'>
         <img src={logo} alt='logo'/>
      </div> */}


        <div className='ten-search' >
            <input type="search" value={search}  onChange={(e)=>setSearch(e.target.value)} placeholder="Search here" />
        </div>
        <div className='ten-lastnav'>
        <div className='tencontent'>
            <select style={{width:'120px'}} className='tenLan' value={language} onChange={(e)=> setLanguage(e.target.value)}>
            <option value="english">English</option>
            </select>
           

           {/* //////////////////////// */}


     <div className="notifications-dropdown">
                <button>
                  <IoIosNotifications className='notify' />
                  {notifications.filter(n => !n.read).length > 0 && ( <span className="notification-badge"> {notifications.filter(n => !n.read).length} </span> )}
                </button>
                <div className="notification-list">
                  {notifications.map(notification => (
                    <div key={notification.id} className={`notification-item ${!notification.read ? 'unread' : ''}`} onClick={() => markAsRead(notification.id)}> {notification.text} </div>
                  ))}
                </div>

       </div>


{/* ///////////////////////////////// */}

            <div className='report notifications-dropdown'>
                     <button ><MdOutlineBugReport className='notify'/> </button>

                     <div className='reportlist  notification-list'>
                          <p>No report found</p>
                     </div>

            </div>
           
           {/* ////////////////// */}


           <div className='profile-edit'> 
             
                 
           <button > <Avatar alt="Remy Sharp" src={profilephoto}/></button>
              
           <div className="profileeditdata">
                       <h4>Hii ,{profileName}</h4>

                  {/* <label htmlFor='prifleid'>EditName</label> */}
                  {/* <input  type='text' id='prifleid' onChange={(e) => setProfileName(e.target.value)} placeholder='enter your name' /> */}
                <label htmlFor="file-upload" style={{ cursor: 'pointer', }}> Edit Profile </label>
                  <button id='file-upload' onClick={() => navigate('/editProfile')}  style={{display:'none'}}>Edit Profile</button>
            </div>

           </div>
          
       </div>
        </div>
      </div>
    
        <div className='tenant-boxes1 '>
          <div className='ten-box1  ten-box'>
                <h5 className='tenant-title'>Rent Status</h5>
                <div className="rent-status">
                <h1> ₹{rentData.current}</h1>
                <p>Due Date: {rentData.dueDate}</p>
            </div>

           </div>
          <div className='ten-box0  ten-box'>
                <h5 className='tenant-title'>Payments Status</h5>
                <div className="payments-status">
                <p  style={{color: rentData.paid ? 'green' : 'red'}}> <strong>Status: </strong>{rentData.paid ? 'Paid' : 'Pending'} </p>
               
                <div className='paybtn'>
                 <div className={`blinking-light ${lightClass}`}>....</div>
                 <button onClick={handleRentStatus}  >Pay</button>
                </div>
           </div>

           </div>
          <div className='ten-box2 ten-box'>
              <h5 className='tenant-title'>Maintenance Status</h5>  
                <p><strong>Status :</strong> inProgress</p>

           </div>
          <div className='ten-box3 ten-box'>
                 <h5 className='tenant-title'>suggestions</h5>
                
                 <div className="suggest-status">
                 <div className="suggestions-status">
                 <h4>Sefra-Chatbot <MdOutlineVerified className='chatbot'/></h4>
                 <p> Ac Service we know summer is Coming </p>
                 </div>
                 <div className="suggestions-status">
                 <h4> Sefra-Chatbot <MdOutlineVerified className='chatbot'/></h4>
                 <p> water filter service is coming </p>
                 </div>
                 <div className="suggestions-status">
                 <h4>Sefra-Chatbot <MdOutlineVerified className='chatbot'/></h4>
                 <p> Tv recharge due data is coming </p>
                 </div>
                 <div className="suggestions-status">
                <h4>Sefra-Chatbot <MdOutlineVerified className='chatbot'/></h4>
                <p> Internet recharge due date is coming </p>
                 </div>
                 <div className="suggestions-status">
               <h4> Sefra-Chatbot <MdOutlineVerified className='chatbot'/></h4>
               <p> Electricity recharge due date is coming </p>
                 </div>



                 </div>
           </div>
        
        
         </div>
         <div className='tenant-boxes1'>
            <div className='ten-box4 tenantbox1'>
                <h5 className='tenant-title'>Payments history</h5>


                <div className='payment-list'>
               {/* list  */}

           <div className='List-OnebyOne'> 

               {paymenthistory.map((trans) =>{
                return(
                  <div key={trans.id} className='payment-list-item'>
                         <h4>{trans.name} <MdOutlineVerified style={{color:'green' , paddingLeft:'5px'}}/></h4>
                         <p><span>Transaction Id: </span> {trans.transaction_id}</p>
                         <div className='amountsec'> 
                         <p ><span>Date: </span>{trans.date} </p>
                         <p className='pieAm' style={{color:'green'}}>₹{trans.amount} <FcPaid className='paidicon'/> </p>
                         </div>
                        
                  </div>
                )
               })}

               </div>
            </div>
            </div>


            <div className='ten-box5'>
                <div className='tanantboxes'>
                <div className='error' >
                    <h5 className='tenant-title'>Issue</h5>
                    <div className='Issuebox'> 
                      <p> No issue found</p>
                    </div>
                </div>
                <div className='error' >
                    <h5 className='tenant-title'>Report</h5>
                    <div className='Issuebox'> 
                      <p> No repor found</p>
                    </div>
                </div>
                </div>

                <div className='messagebox' >
                      <h5 className='tenant-title'>Messages</h5>
               {/*  /////// */}
                      <div className="message-list">
              {messages.map(message => (
                <div key={message.id} className="message-item">
                  <Avatar src={profileName} alt='sender' />
                  <div className="message-content">
                    <h4>Ram Singh<MdOutlineVerified style={{color:'green' , paddingLeft:'5px'}}/></h4>
                    <p>{message.preview}</p>
                    <small>{new Date(message.timestamp).toLocaleDateString()}</small>
                  </div>
                </div>
              ))}
            </div>

                </div>



            </div>
         </div>

      </div>







    </div>
  )
}

export default dashboard
