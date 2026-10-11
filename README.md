# MockMyAPI

> **Build Bulletproof UIs with Chaos Engineering**

MockMyAPI is a B2B developer tool that enables frontend engineers to dynamically generate fake API endpoints on the fly with chaos engineering capabilities. Test your UI under realistic network conditions without waiting for backend teams.

![MockMyAPI Dashboard](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Node](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)

---

## 🚀 Features

### Core Functionality
- **Dynamic Mock Endpoints** - Create REST API endpoints instantly with custom paths, methods, and responses
- **Full CRUD Operations** - Create, read, update, and delete mock endpoints through an intuitive dashboard
- **Real-time Testing** - Test your endpoints directly from the UI with live response preview

### 🌩️ Chaos Engineering (Killer Feature)
Unlike standard mock APIs, MockMyAPI is built for chaos engineering:

- **Network Latency Simulation** (0-10s)
  - Test loading spinners and skeleton screens
  - Verify timeout handling
  - Simulate slow network conditions

- **Failure Rate Injection** (0-100%)
  - Randomly return 500 errors
  - Test error boundaries and retry logic
  - Verify fallback UI components

### 💎 Enterprise UX Features
- **Contextual Onboarding** - Helper text and tooltips throughout the interface
- **Interactive Loading States** - Visual feedback for all async operations
- **Toast Notifications** - Elegant success/error notifications
- **Premium Empty States** - Beautiful, informative empty state designs
- **Responsive Design** - Works seamlessly across all screen sizes
- **YouTube-like Navigation** - Sidebar navigation with multiple views

---

## 🛠️ Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express 6** - Web framework with native async error handling
- **MongoDB** - NoSQL database for endpoint storage
- **Mongoose** - ODM for MongoDB with schema validation
- **ES Modules** - Modern JavaScript module system

### Frontend
- **React 19** - UI library with latest features
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icons
- **Modern JavaScript** - ES6+ features throughout

### Architecture
- **RESTful API** - Clean, semantic endpoint design
- **Component-based** - Modular, reusable React components
- **Custom hooks** - Encapsulated state management logic
- **Error boundaries** - Graceful error handling
- **Toast system** - Global notification management

---

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn
- Git

### Clone Repository

```bash
git clone https://github.com/yourusername/mockmyapi.git
cd mockmyapi
```

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cat > .env << EOF
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mockmyapi
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
EOF

# Start backend server
npm run dev
```

### Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🚀 Running the Application

### Development Mode

1. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   
   # Or use MongoDB Atlas connection string in .env
   ```

2. **Start Backend** (Terminal 1)
   ```bash
   cd backend
   npm run dev
   ```
   Backend will run on `http://localhost:5000`

3. **Start Frontend** (Terminal 2)
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

4. **Access Application**
   - Open browser: `http://localhost:5173`
   - Navigate using the sidebar: Builder, Endpoints, Usage Guide, About

### Production Build

```bash
# Build frontend
cd frontend
npm run build

# Start backend in production
cd ../backend
NODE_ENV=production npm start
```

---

## 📖 Usage

### Creating a Mock Endpoint

1. Navigate to **Builder** in the sidebar
2. Configure your endpoint:
   - **Path**: `/api/users`
   - **Method**: `GET`
   - **Status Code**: `200`
   - **Response Body**: `{"success": true, "data": []}`
3. Set chaos engineering parameters:
   - **Network Latency**: 2000ms (test loading states)
   - **Failure Rate**: 30% (test error handling)
4. Click **Create Mock Endpoint**

### Using in Your Application

```javascript
// Fetch from your mock endpoint
fetch('http://localhost:5000/mock/testuser/api/users')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('Error:', err));
```

### Testing Chaos Scenarios

- **Loading States**: Set delay to 3-5 seconds, verify spinners appear
- **Error Boundaries**: Set failure rate to 100%, verify error UI displays
- **Retry Logic**: Set failure rate to 50%, verify retries work correctly
- **Combined Stress**: Mix high latency with failure rates for worst-case testing

---

## 🤖 AI Development Experience

This project was built using **Kiro IDE** - an AI-powered development environment that accelerates the entire development lifecycle.

### How Kiro Was Used

Kiro acted as an intelligent pair programmer throughout the development process, handling everything from architecture decisions to implementation details. The AI understood the project context and requirements, maintaining consistency across all code generation and modifications.

### Specific Tasks Accomplished with Kiro

#### 1. **Full-Stack Architecture Setup**
- Generated complete Express 6 backend with ES Modules
- Created MongoDB schemas with Mongoose validation
- Set up React 19 frontend with Vite and Tailwind v4
- Configured CORS, error handling middleware, and database connections

#### 2. **Component Development & UI/UX Design**
- Built entire component library (Header, Sidebar, Footer, Forms, Cards, Lists)
- Implemented enterprise-grade UX patterns:
  - Interactive loading states with lucide-react icons
  - Toast notification system with animations
  - Premium empty states
  - Contextual helper text and tooltips
- Created responsive layouts with Tailwind CSS utility classes
- Designed custom slider components with textbox inputs for precise control

#### 3. **API Development & Express 6 Migration**
- Created RESTful API endpoints for CRUD operations
- Implemented chaos engineering logic (latency injection, failure simulation)
- Fixed Express 6 path-to-regexp compatibility issues with wildcard routes
- Built error handling with custom ApiError and ApiResponse classes
- Implemented native async error handling (no try/catch wrappers needed)

#### 4. **Debugging & Problem Solving**
- Diagnosed and fixed MongoDB connection issues
- Resolved Express 6 wildcard route syntax errors (`/:username/*` instead of deprecated patterns)
- Fixed missing `owner` field in endpoint creation
- Corrected lucide-react icon imports (removed non-existent icons)
- Debugged blank page issues caused by import/export mismatches

#### 5. **Code Refactoring & Architecture Improvements**
- Refactored monolithic App.jsx into modular component structure
- Separated concerns: layout, pages, common components, builders, endpoints
- Converted from CommonJS to ES Modules across entire backend
- Improved slider UX with larger thumbs, visual fills, and numeric inputs
- Added custom CSS for enhanced slider interactions (grab cursors, hover effects)

### Key Benefits Observed

- **Rapid Prototyping**: Went from concept to working prototype in hours, not days
- **Consistency**: Kiro maintained architectural patterns and coding standards throughout
- **Error Prevention**: Caught potential issues before they became bugs (e.g., missing required fields)
- **Best Practices**: Applied modern React patterns, Express 6 features, and enterprise UX principles automatically
- **Context Awareness**: Understood project requirements and made informed decisions about implementation details

---

## 📁 Project Structure

```
mockmyapi/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js          # MongoDB connection
│   │   ├── controllers/
│   │   │   ├── endpoint.controller.js  # CRUD operations
│   │   │   └── mock.controller.js      # Mock serving + chaos
│   │   ├── middlewares/
│   │   │   └── error.middleware.js     # Global error handler
│   │   ├── models/
│   │   │   └── endpoint.model.js       # Mongoose schema
│   │   ├── routes/
│   │   │   ├── endpoint.routes.js
│   │   │   └── mock.routes.js
│   │   ├── utils/
│   │   │   ├── ApiError.js
│   │   │   └── ApiResponse.js
│   │   ├── app.js                      # Express app setup
│   │   └── server.js                   # Entry point
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── builder/
│   │   │   │   └── EndpointForm.jsx
│   │   │   ├── common/
│   │   │   │   └── Toast.jsx
│   │   │   ├── endpoints/
│   │   │   │   ├── EndpointCard.jsx
│   │   │   │   └── EndpointList.jsx
│   │   │   ├── layout/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   └── Footer.jsx
│   │   │   └── pages/
│   │   │       ├── BuilderView.jsx
│   │   │       ├── EndpointsView.jsx
│   │   │       ├── UsageGuide.jsx
│   │   │       └── InfoPage.jsx
│   │   ├── App.jsx                     # Main app component
│   │   ├── main.jsx                    # Entry point
│   │   └── index.css                   # Global styles
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

## 🎯 API Endpoints

### Endpoint Management

- `POST /api/v1/endpoints` - Create new mock endpoint
- `GET /api/v1/endpoints/:username` - Get all endpoints for user
- `DELETE /api/v1/endpoints/:id` - Delete endpoint

### Mock Serving

- `ALL /mock/:username/*` - Serve mock response with chaos engineering

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- Built with ❤️ using **Kiro IDE**
- Inspired by chaos engineering principles from Netflix and other tech leaders
- Designed for developers who care about user experience

---

## 📧 Contact

**Project Link**: [https://github.com/yourusername/mockmyapi](https://github.com/yourusername/mockmyapi)

**Developer**: Your Name  
**Email**: your.email@example.com

---

<div align="center">
  <p>⚡ Test smarter, ship faster with MockMyAPI</p>
  <p>Made with Kiro IDE • 2024</p>
</div>
