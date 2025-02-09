import React from 'react'
import './rolesform.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function rolesform() {
    const navigate =  useNavigate() 


const storedUserData = localStorage.getItem('userData');
     if (storedUserData) {
       const userData = JSON.parse(storedUserData); 
       console.log(userData);
     } else {
       navigate('/'); 
       console.log("No user data found");
     }
        
const Handlelandlord = async () => {
       try {
         const userlogin = JSON.parse(localStorage.getItem('userlogin')); 
         let res = await axios.post( 'https://eastrent-f7be6-default-rtdb.firebaseio.com/user.json', { ...userlogin, Role: 'landlord' } );
         console.log(res.data);
         navigate('/landlordDashboard');
       } catch (error) {
         console.log("Error: Some error occurred", error);
       }
     };
     
     const HandleTenant = async () => {
        try {
            const userlogin = JSON.parse(localStorage.getItem('userlogin')); 
            let res = await axios.post( 'https://eastrent-f7be6-default-rtdb.firebaseio.com/user.json', { ...userlogin, Role: 'Tenant' } );
            console.log(res.data);
            navigate('/tenantdash');
          } catch (error) {
            console.log("Error: Some error occurred", error);
          }

     };

  return (
    <div className='rolesform'>
    <div  className='role'>
    <div><button  onClick={Handlelandlord} >Landlord</button></div>
    <div><button onClick={HandleTenant}>Tenant</button> </div>
    </div>
    </div>
  )
}

export default rolesform;
