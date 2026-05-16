# 🌍 BookNTravel – Premium Travel & Tourism Platform

BookNTravel is a state-of-the-art, full-stack travel booking application designed to provide a seamless and luxury experience for travelers. From real-time weather updates to AI-powered trip planning, it combines modern aesthetics with robust backend functionality.

---

## 🔗 Live Demo
🚀 **Experience the live application here:** [https://bookntravel.onrender.com](https://bookntravel.onrender.com)

---

## ✨ Key Features

- **🛡️ Secure Authentication:** JWT-based user registration and login with encrypted passwords.
- **🗺️ Interactive Destinations:** Explore 30+ domestic and international destinations with real-time weather and interactive maps.
- **🤖 AI Trip Planner:** Personalized itineraries generated using **Google Gemini AI** based on your budget, vibe, and duration.
- **🏩 Comprehensive Bookings:** Integrated systems for Flights, Hotels, Trains, and Curated Tour Packages.
- **💳 Payment Gateway Simulation:** Realistic 3D-secure OTP authentication flow with dynamic code generation.
- **📄 E-Tickets & Invoices:** Instant PDF generation for bookings with professional formatting.
- **🌙 Premium UI/UX:** Responsive design featuring **Glassmorphism**, smooth animations, and a fully functional **Dark Mode**.
- **❤️ Smart Wishlist:** Save your favorite destinations and packages to your profile for future planning.

---

## 🛠️ Technology Stack

### Frontend
- **HTML5 & CSS3:** Modern layout with custom glassmorphism and premium typography.
- **JavaScript (Vanilla):** High-performance client-side logic without heavy framework overhead.
- **Bootstrap 5.3:** For a mobile-first, responsive grid system.
- **Leaflet.js:** Powering interactive, high-performance maps.
- **Lucide & Bootstrap Icons:** For consistent, modern iconography.

### Backend
- **Node.js:** Scalable runtime environment.
- **Express.js:** Minimalist web framework for the RESTful API.
- **Mongoose:** Elegant MongoDB object modeling.

### Database
- **MongoDB:** NoSQL database for flexible data storage of users, destinations, and bookings.

### APIs Used
- **Open-Meteo API:** For real-time weather forecasts and condition-based icons.
- **Open-Meteo Geocoding:** Instant coordinate retrieval for global locations.
- **Google Gemini API:** Powering the intelligent AI Trip Planner.

---

## 📂 Project Structure

```text
Travel/
├── client/             # Frontend static files
│   ├── css/            # Stylesheets (style.css)
│   ├── html/           # All page views (destinations, packages, etc.)
│   ├── js/             # Frontend logic (main.js)
│   └── images/         # Optimized destination & brand assets
├── server/             # Backend API
│   ├── models/         # Mongoose Schemas (User, Booking, etc.)
│   ├── routes/         # API Endpoints
│   ├── middleware/     # Auth & Error handlers
│   └── seeder.js       # Database initialization script
└── README.md           # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or local MongoDB installation.

### 2. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_random_secret
GEMINI_API_KEY=your_google_gemini_api_key
```

### 4. Database Seeding
To populate the database with premium destinations, packages, and services, run the seeder:
```bash
node server/seeder.js
```

### 5. Running the Application
Start the backend server:
```bash
npm start
```
*The server will run on `http://localhost:5000`.*

Open your browser and visit:
`http://localhost:5000` (or simply open `client/index.html` if running via Live Server).

---

## 👨‍💻 Developer
**Developed by Sitaram**  
Built with passion for the global explorer community.

---

## 📜 License
This project is for educational and portfolio purposes. Feel free to use and modify it for your own learning!
