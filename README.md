## Easy Renter

## Introduction
Easy Renter is a tenant-landlord communication platform designed to streamline property management, rent tracking, and maintenance requests. The project aims to provide a seamless and efficient interface for both tenants and landlords, ensuring clear communication and better management of rental properties.

## Project Type
**Frontend**

## Deployed App
- **Frontend:** [Easy Renter](https://easyrenter.netlify.app)
- **GitHub Repository:** [Easy Renter](https://github.com/jitendra-sudo/EasyRent)

## Directory Structure
    my-app/
    │  ├─ components/
    │  ├─ assets/
    │  ├─ utils/
    │  ├─ ...



## Features
- **Maintenance Request System:** Tenants can submit requests with issue details, urgency, and attachments.
- **Issue Tracking Dashboard:** Real-time status updates for maintenance requests.
- **Instant Messaging:** Direct chat between tenants and landlords.
- **Rent Payment Tracker:** Tenants can view due dates, payment history, and landlords can send reminders.
- **Notifications & Alerts:** Push notifications for messages, maintenance updates, and rent reminders.
- **User Profiles:** Tenants and landlords can manage their profiles and settings.
- **Mobile-Friendly UI:** Fully responsive design for all devices.

## Design Decisions & Assumptions
- **Frontend-Only Approach:** Since the focus is on UI, the project relies on mock APIs or Firebase for backend interactions.
- **Socket.io for Real-Time Communication:** Ensures smooth and instant messaging updates.
- **State Management:** Redux (or Zustand) for efficient global state handling.
- **UI Framework:** Tailwind CSS for a modern and responsive design.

## Installation & Getting Started
Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/jitendra-sudo/EasyRent.git

# Navigate to the frontend directory
cd EasyRent

# Install dependencies
npm install

# Start the development server
npm start
