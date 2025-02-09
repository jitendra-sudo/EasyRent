#Easy Renter

Introduction

Easy Renter is a tenant-landlord communication platform designed to streamline property management, rent tracking, and maintenance requests. The project aims to provide a seamless and efficient interface for both tenants and landlords, ensuring clear communication and better management of rental properties.

Project Type

Frontend

Deployed App

Frontend: Easy Renter
GitHub Repository: Easy Renter

Directory Structure

my-app/
├─ frontend/
│  ├─ components/
│  ├─ assets/
│  ├─ utils/
│  ├─ ...

Video Walkthrough of the Project

Attach a short video walkthrough demonstrating all features (1-3 minutes).

Video Walkthrough of the Codebase

Attach a short video walkthrough explaining the code structure (1-5 minutes).

Features

Maintenance Request System: Tenants can submit requests with issue details, urgency, and attachments.

Issue Tracking Dashboard: Real-time status updates for maintenance requests.

Instant Messaging: Direct chat between tenants and landlords.

Rent Payment Tracker: Tenants can view due dates, payment history, and landlords can send reminders.

Notifications & Alerts: Push notifications for messages, maintenance updates, and rent reminders.

User Profiles: Tenants and landlords can manage their profiles and settings.

Mobile-Friendly UI: Fully responsive design for all devices.

Design Decisions & Assumptions

Frontend-Only Approach: Since the focus is on UI, the project relies on mock APIs or Firebase for backend interactions.

Socket.io for Real-Time Communication: Ensures smooth and instant messaging updates.

State Management: Redux/Zustand for efficient global state handling.

UI Framework: Tailwind CSS for a modern and responsive design.

Installation & Getting Started

Follow these steps to run the project locally:

# Clone the repository
git clone https://github.com/jitendra-sudo/EasyRent.git

# Navigate to frontend
dd EasyRent/frontend

# Install dependencies
npm install

# Start the development server
npm start

Usage

After running the project, users can:

Sign in as a tenant or landlord.

Submit and track maintenance requests.

Communicate in real-time through messaging.

Monitor rent payments and receive notifications.

Credentials

Provide sample credentials for testing authenticated features:

Tenant Login:
Email: tenant@example.com
Password: tenant123

Landlord Login:
Email: landlord@example.com
Password: landlord123

APIs Used

Firebase Authentication: Secure user login and authentication.

Firebase Firestore: Real-time database for storing requests and messages.

Push API: For real-time notifications.

Technology Stack

Frontend: React.js, Vite, Tailwind CSS

State Management: Redux

Real-Time Communication: Socket.io

Authentication & Database: Firebase

Hosting: Netlify
