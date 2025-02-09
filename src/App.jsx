import { useState } from 'react'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Home from './components/home'
import TenantDashboard from './components/Tenant/dashboard'
import MaintenanceForm from './components/Tenant/maintence'
import ReportForm from './components/Tenant/reportforn'
import FeedbackForm from './components/Tenant/feedbackform'
import LeaseStatus from './components/Tenant/leaseStatus'
import Chatbox from './components/Tenant/chatbox'
import Rolesform from './components/rolesform'
import Forgetpassword from './components/forgetpassword'
import ProfileEdit from './components/Tenant/editProfile'
import Tenantdash from './components/Tenant/TenanPage'
import LandlordDashboard from "./components/landlord/components/Dashboard";
import LandlordDashboardpage from "./components/landlord/pages/Dashboardpage";
import LandlordMyProperties from "./components/landlord/pages/PropertyManagement";
import LandlordMaintenanceCommunication from "./components/landlord/pages/Maintenance&Communication"
import LandlordRentPayment from "./components/landlord/pages/RentPayment";
import "./index.css"


function App() {
  return (
   <>
<BrowserRouter>
  <Routes>
   <Route path='/tenant' element ={ <TenantDashboard/>} />
   <Route path='/resetpassword' element ={ <Forgetpassword/>} />
   <Route path='/editProfile' element ={ <ProfileEdit/>} />
   <Route path='/tenantdash' element ={ <Tenantdash/>} />

   <Route path='/maintenance' element ={ <MaintenanceForm/>} />
   <Route path='/reportForm' element ={ <ReportForm/>} />
   <Route path='/feedbackForm' element ={ <FeedbackForm/>} />
   <Route path='/leaseStatus' element ={ <LeaseStatus/>} />
   <Route path='/chatbox' element ={ <Chatbox/>} />
   <Route path='/role' element ={ <Rolesform/>} />
  <Route path="/" element={<Home />} />
  <Route path="landlordDashboard" element={<LandlordDashboard />}/>
        <Route path="landlordMyProperties" element={<LandlordMyProperties />}/>
        <Route path="landlordDashboardpage" element={<LandlordDashboardpage />}/>
        <Route path="landlordMyProperties" element={<LandlordMyProperties />}/>
        <Route path="landlordRentPayment" element={<LandlordRentPayment />}/>
        <Route path="landlordMaintenanceCommunication" element={<LandlordMaintenanceCommunication />}/>
         
  </Routes>
</BrowserRouter>
   </>
  )
}

export default App



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import Dashboardpage from "./pages/Dashboardpage";
// import MyProperties from "./pages/PropertyManagement";
// import MaintenanceCommunication from "./pages/Maintenance&Communication"
// import RentPayment from "./pages/RentPayment";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Dashboard />}/>
//         <Route path="*" element={<MyProperties />}/>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

