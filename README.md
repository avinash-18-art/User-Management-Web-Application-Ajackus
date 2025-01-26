# User Management Web Application

## Project Overview
This is a simple React-based web application that allows users to view, add, edit, and delete user details. It interacts with a mock backend API (JSONPlaceholder) to simulate real-world API requests. The user details include ID, First Name, Last Name, Email, and Department.

---

## Project Setup Instructions

### Prerequisites
Before running the application, ensure that you have the following software installed:

- **Node.js** (version 14 or later)
- **npm** (Node Package Manager, which comes with Node.js)

### Installation Steps

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/avinash-18-art/User-Management-Web-Application-Ajackus.git

2. Navigate to the project directory: 

cd user-management-app

3. Install the necessary dependencies: 

npm install

4. Once the dependencies are installed, start the development server: 

npm start

5. Open your browser and visit http://localhost:3000 to see the application in action. 

## Directory Structure :

user-management-app/
├── public/
│   └── index.html          # The HTML file that serves as the root of the React app
├── src/
│   ├── components/         # Contains reusable components
│   │   ├── UserList.js     # Displays the list of users
│   │   ├── UserForm.js     # Handles the form for adding/editing users
│   │   ├── Modal.js        # Modal for adding/editing user details
│   │   ├── ErrorBoundary.js # Catches and displays errors in the app
│   ├── api/                # Contains functions for making API calls
│   │   └── api.js          # Functions to interact with JSONPlaceholder API
│   ├── App.js              # Main App component that holds everything together
│   ├── App.css             # Main CSS file for styling the application
│   ├── index.js            # Entry point for the React app
│   └── index.css           # Global styles
├── package.json            # Project configuration file with dependencies and scripts
└── README.md               # Project documentation (this file)

## Components :

* UserList: Displays a table of users and their details (ID, First Name, Last Name, Email, Department). It also includes buttons for editing and deleting users.

* UserForm: A form that allows users to add or edit user details. It includes fields for First Name, Last Name, Email, and Department.

* Modal: A modal popup component used to display the UserForm for adding/editing user details.

* ErrorBoundary: A component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI.

# API Interaction:

* The application uses the JSONPlaceholder API to fetch user data. The following endpoints are used:

* GET /users: Fetches the list of users.
* POST /users: Simulates adding a new user.
* PUT /users/{id}: Simulates updating an existing user.
* DELETE /users/{id}: Simulates deleting a user.

## Challenges Faced: 

1. API Simulation: Since JSONPlaceholder does not persist data, the simulated POST, PUT, and DELETE requests do not actually affect the database. This required some workaround to handle user actions in a way that still feels responsive.

2. Error Handling: Ensuring that errors in API requests are captured and displayed properly was a challenge. We implemented an ErrorBoundary component to handle unexpected errors and provide a user-friendly fallback UI.

3. State Management: Managing the state for user data and modal visibility proved to be a bit tricky, especially with adding and editing users. However, we used React's useState and useEffect hooks to handle the state efficiently.

4. Modal Design: Creating a modal that smoothly appears and closes while handling form validation was time-consuming, but it's crucial for a good user experience.

## Potential Improvements:

1. Persistent Backend: Instead of using JSONPlaceholder, integrate a real backend (e.g., using Node.js with Express and a database like MongoDB or SQLite) to persist user data between sessions.

2. Client-Side Validation: Add client-side validation for the user input form to ensure that required fields are filled and that emails are valid before submitting data.

3. Pagination/Infinite Scroll: Implement pagination or infinite scroll for the user list to handle larger datasets efficiently.

4. Styling Enhancements: While the current styling is functional, we could use CSS frameworks like TailwindCSS or Material-UI for a more modern and professional look.

5. Testing: Add unit and integration tests using Jest and React Testing Library to ensure that the app behaves as expected across different scenarios.

6. Authentication: Add user authentication to prevent unauthorized access to user management features, such as adding or deleting users.


## Conclusion:

This project is a basic demonstration of how to create a user management system with React, API integration, and modular components. The user experience can be enhanced further with additional features like authentication, client-side validation, and persistence in a real backend."# User-Management-Web-Application-Ajackus" 
