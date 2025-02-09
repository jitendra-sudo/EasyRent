# **EasyRent :- Tenant-Landlord Communication Platform**

# Introduction:

The Tenant-Landlord Communication Platform is designed to streamline communication between tenants and landlords, making it easier to report maintenance issues, track payments, and enhance transparency in property management. The platform provides an intuitive, user-friendly interface for both tenants and landlords to manage property-related interactions efficiently.

# Project Type:

Frontend | Backend | Fullstack
Frontend: React.js (Next.js) with Tailwind CSS
Backend: Nest.js
Database: Supabase

# Deployed Application:

Frontend: Frontend Link
Backend: Backend Link
Database: Supabase Link

# **Directory Structure**:

my-app/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── utils/

## Video Walkthrough:

Project Features Walkthrough: Video Link
Codebase Walkthrough: Video Link

# **Features**:

# Intuitive Maintenance Request System:

Step-by-step form for tenants to report maintenance issues
Categorization of issues (plumbing, electrical, general, etc.)
Drag-and-drop support for uploading images/videos

# Issue Tracking Dashboard:

Tenants can track maintenance request statuses
Landlords can categorize and filter issues
Timeline view for each request

# **Instant Messaging System**:

Real-time chat between tenants and landlords
Message status indicators (sent, delivered, read)
Push notifications for new messages or maintenance updates

# **Maintenance History and Reports**:

Landlords can view past maintenance records
Exportable reports (CSV, PDF)

# **Rent Payment Tracker**:

Tenants can view past payments and upcoming due dates
Interactive rent reminders
Landlords can track payment statuses across properties

# **Responsive Design**:

Mobile-first approach for optimized user experience
Adaptive UI for larger screens

# **User Profiles and Customization**:

Tenants can upload avatars and update contact info
Landlords can manage multiple properties

# **Interactive Maintenance Scheduling**:

Tenants can book maintenance appointments
Landlords can approve or reschedule visits

# **Multi-Language Support**:

Language toggle feature for broader accessibility

# **AI Enhancements**:

AI-powered chatbot for common queries
Voice command support for submitting requests

# **Design Decisions & Assumptions**:

Mobile-first development for a seamless experience on all devices

Role-based access control to differentiate functionalities between tenants and landlords

Optimized UI/UX using Tailwind CSS for fast and responsive design

Use of Supabase for authentication and data storage

Nest.js for backend services to ensure a scalable API architecture

Real-time messaging powered by WebSockets for instant updates

Installation & Getting Started

To run the project locally, follow these steps:

# Clone the repository

git clone https://github.com/jitendra-sudo/EasyRent
cd tenant-landlord-app

# Install dependencies

npm install

# Start frontend

docker-compose up frontend

# Start backend

docker-compose up backend

# **Environment Variables**

Create a .env file in the root directory with the following variables:
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
DATABASE_URL=
JWT_SECRET=

# **Usage**

# To use the platform:

Sign up as either a tenant or a landlord.
Tenants can submit maintenance requests and track them in real-time.
Landlords can manage properties, communicate with tenants, and track payments.
Both users can chat directly and receive notifications.

# Credentials for Testing

Landlord Account:
  Email: landlord@example.com
  Password: landlord123

Tenant Account:
  Email: tenant@example.com
  Password: tenant123

# **APIs Used**

Supabase Auth & Database (for user authentication and storage)

Razorpay (for rent payment processing)

WebSockets (for real-time chat communication)

AI Chatbot API (for automated support)

# **API Endpoints**:

# User Authentication

POST /api/auth/signup - Register a new user
POST /api/auth/login - Authenticate user

# Maintenance Requests

GET /api/maintenance - Get all maintenance requests
POST /api/maintenance - Submit a maintenance request
PATCH /api/maintenance/:id - Update request status

# Messaging System

GET /api/messages - Retrieve all messages
POST /api/messages - Send a new message

# Rent Payments

GET /api/payments - Get payment history
POST /api/payments - Mark rent as paid

# **Technology Stack**:

Frontend: Next.js, React, Tailwind CSS
Backend: Nest.js, Node.js
Database: Supabase
Authentication: Supabase Auth
Payment Integration: Razorpay
Real-Time Communication: WebSockets
Deployment: Vercel (Frontend), AWS (Backend)
