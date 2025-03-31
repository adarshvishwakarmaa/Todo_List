# Todo List

## Description

Todo List is a **full-stack CRUD application** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This application allows users to **Create, Read, Update, and Delete** (CRUD) their tasks. Users can add tasks, track their progress, and manage their to-do items efficiently.

This project serves as a practical example of implementing the MERN stack for full-stack development, making it a great learning resource for both beginners and experienced developers.

## Features

- ✅ **Add tasks** to the to-do list
- ✅ **View** all added tasks
- ✅ **Update** task details and status
- ✅ **Delete** completed or unnecessary tasks
- ✅ **RESTful API** for seamless frontend-backend communication
- ✅ **Responsive UI** for an intuitive user experience

## Tech Stack

### **Frontend:**
- React.js
- React Router DOM
- Axios
- React Icons
- FontAwesome Icons
- React Hot Toast

### **Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- Body-Parser
- CORS
- Dotenv
- Nodemon (for development)

## Getting Started

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-list.git
   cd todo-list
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

### **Running the Application**

1. **Start the Backend**:
   ```bash
   cd backend
   npm start
   ```

2. **Start the Frontend**:
   ```bash
   cd frontend
   npm run dev
   ```

3. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## API Endpoints

| Method | Endpoint          | Description                |
|--------|------------------|----------------------------|
| GET    | `/api/tasks`     | Fetch all tasks           |
| GET    | `/api/tasks/:id` | Fetch a single task       |
| POST   | `/api/tasks`     | Create a new task         |
| PUT    | `/api/tasks/:id` | Update an existing task   |
| DELETE | `/api/tasks/:id` | Delete a task             |

## Acknowledgments

This project was developed to demonstrate **CRUD operations** using the **MERN stack**. Special thanks to the **React** and **Node.js** communities for their valuable resources and support. The application integrates a powerful **MongoDB** database, an intuitive **React UI**, and an efficient **Express.js backend** to provide a seamless user experience.

## Live Demo

## Contact

For queries or collaborations, feel free to reach out via email or GitHub. 🚀

