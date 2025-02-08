import { useState } from 'react'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Home from './components/home'
import Dashboard from './Tenant/dashboard'
import MaintenanceForm from './Tenant/maintence'
import ReportForm from './Tenant/reportforn'
import ReedbackForm from './Tenant/feedbackform'
import FeedbackForm from './Tenant/feedbackform'
import LeaseStatus from './Tenant/leaseStatus'
import Chatbox from './Tenant/chatbox'

function App() {
  return (
   <>
<BrowserRouter>
  <Routes>
   <Route path='dashboard' element ={ <Dashboard/>} />
   <Route path='maintenance' element ={ <MaintenanceForm/>} />
   <Route path='reportForm' element ={ <ReportForm/>} />
   <Route path='feedbackForm' element ={ <FeedbackForm/>} />
   <Route path='leaseStatus' element ={ <LeaseStatus/>} />
   <Route path='chatbox' element ={ <Chatbox/>} />
   
   <Route path='*' element ={ <Dashboard/>} />
  <Route path="/" element={<Home />} />
  {/* <Route path="*" element={<Home />} />qqqqqqqq */}
  </Routes>
</BrowserRouter>
   </>
  )
}

export default App
