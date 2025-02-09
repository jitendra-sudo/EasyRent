import { useState, useEffect } from 'react';
import { format, differenceInDays, isBefore } from 'date-fns';
import { FaFilePdf, FaMoneyCheckAlt, FaHome, FaCalendarCheck } from 'react-icons/fa';
import './leaseStaus.css';

const LeaseStatus = ({ leaseData }) => {
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [leaseProgress, setLeaseProgress] = useState(0);

  useEffect(() => {
    if (leaseData) {
      const today = new Date();
      const totalLeaseDays = differenceInDays(leaseData.endDate, leaseData.startDate);
      const daysPassed = differenceInDays(today, leaseData.startDate);
      const remaining = differenceInDays(leaseData.endDate, today);
      
      setDaysRemaining(remaining > 0 ? remaining : 0);
      setLeaseProgress(Math.min(Math.max((daysPassed / totalLeaseDays) * 100, 0), 100));
    }
  }, [leaseData]);

  if (!leaseData) return <div>Loading lease information...</div>;

  return (
    <div className="lease-container">
      <div className="lease-header">
        <FaHome size={24} />
        <h2>Lease Status - {leaseData.property.address}</h2>
      </div>

      <div className="lease-overview">
        <div className="lease-section">
          <h3><FaCalendarCheck /> Lease Term</h3>
          <div className="date-container">
            <div className="date-item">
              <label>Start Date:</label>
              <div>{format(leaseData.startDate, 'MMM dd, yyyy')}</div>
            </div>
            <div className="date-item">
              <label>End Date:</label>
              <div>{format(leaseData.endDate, 'MMM dd, yyyy')}</div>
            </div>
            <div className="date-item">
              <label>Days Remaining:</label>
              <div>{daysRemaining} days</div>
            </div>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${leaseProgress}%` }}
            ></div>
          </div>
        </div>

        <div className="lease-section">
          <h3><FaMoneyCheckAlt /> Rent Status</h3>
          <div className="status-grid">
            <div className="status-item">
              <label>Monthly Rent:</label>
              <div className="amount">₹{leaseData.rentAmount}</div>
            </div>
            <div className="status-item">
              <label>Payment Status:</label>
              <div className={`status-indicator status-indicator--${leaseData.paymentStatus}`}>
                {leaseData.paymentStatus}
              </div>
            </div>
            <div className="status-item">
              <label>Security Deposit:</label>
              <div className="amount">₹{leaseData.securityDeposit}</div>
              <div className={`refund-status refund-status--{leaseData.depositRefunded ? 'yes' : 'no'}`}>
                {leaseData.depositRefunded ? 'Refunded' : 'Held'}
              </div>
            </div>
          </div>
        </div>

        <div className="lease-section documents-section">
          <h3><FaFilePdf /> Lease Documents</h3>
          <div className="document-list">
            <div className="document-item">
              <FaFilePdf />
              <span>Lease Agreement.pdf</span>
              <button className="download-button">Download</button>
            </div>
            <div className="document-item">
              <FaFilePdf />
              <span>Move-In Checklist.pdf</span>
              <button className="download-button">Download</button>
            </div>
          </div>
        </div>
      </div>

      <div className="lease-section important-dates">
        <h3>Upcoming Dates</h3>
        <div className="date-list">
          {leaseData.importantDates.map((date, index) => (
            <div className="date-entry" key={index}>
              <div>{format(date.date, 'MMM dd')}</div>
              <div>{date.description}</div>
              <div>{isBefore(date.date, new Date()) ? 'Passed' : 'Upcoming'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

LeaseStatus.defaultProps = {
  leaseData: {
    property: { address: '123 Main St, Apt 4B' },
    startDate: new Date('2023-01-01'),
    endDate: new Date('2024-12-31'),
    rentAmount: 1200,
    paymentStatus: 'current',
    securityDeposit: 3000,
    depositRefunded: false,
    importantDates: [
      { date: new Date('2023-11-01'), description: 'Rent Due' },
      { date: new Date('2024-01-01'), description: 'Lease Renewal Option' }
    ]
  }
};

export default LeaseStatus;