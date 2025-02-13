# ChatBot with Gemini AI

This is a full-stack chatbot application using React for the frontend and Node.js for the backend. The chatbot integrates with Gemini AI to provide intelligent responses.

## Features
- User authentication (JWT-based)
- Chat history persistence
- Professional UI with Tailwind CSS
- Secure API communication
- Hosted on Render (backend) and Netlify (frontend)

## Tech Stack
- **Frontend:** React, Tailwind CSS, React Router
- **Backend:** Node.js, Express, MongoDB
- **Authentication:** JWT (JSON Web Token)
- **AI Integration:** Gemini AI
- **Deployment:** Render (Backend), Netlify (Frontend)

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- MongoDB (local or cloud)

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/chatbot.git
   cd chatbot/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   AI_API_KEY=your_gemini_ai_api_key
   ```
4. Start the server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm run dev
   ```

## Deployment
### Deploy Backend on Render
1. Push your backend code to GitHub.
2. Go to [Render](https://render.com/) and create a new web service.
3. Connect your GitHub repository and deploy.
4. Add environment variables in Render's settings (same as `.env` file).

### Deploy Frontend on Netlify
1. Push your frontend code to GitHub.
2. Go to [Netlify](https://www.netlify.com/) and create a new site.
3. Connect your GitHub repository and deploy.
4. Update the `VITE_BACKEND_URL` in your `.env` file to match Render's backend URL.

## Usage
1. Register/Login to access the chatbot.
2. Start chatting with Gemini AI.
3. View chat history upon login.
4. Logout when finished.

## Git for Server - https://github.com/praveen-piramanayagam/AIChatbot

