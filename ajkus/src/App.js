import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css"

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", department: "Engineering" },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", department: "Marketing" },
    { id: 3, firstName: "Alice", lastName: "Johnson", email: "alice@example.com", department: "Finance" },
    { id: 4, firstName: "Bob", lastName: "Williams", email: "bob@example.com", department: "HR" },
    { id: 5, firstName: "Charlie", lastName: "Brown", email: "charlie@example.com", department: "Sales" },
    { id: 6, firstName: "David", lastName: "Davis", email: "david@example.com", department: "Engineering" },
    { id: 7, firstName: "Emily", lastName: "Miller", email: "emily@example.com", department: "Marketing" },
    { id: 8, firstName: "Frank", lastName: "Wilson", email: "frank@example.com", department: "HR" },
    { id: 9, firstName: "Grace", lastName: "Moore", email: "grace@example.com", department: "Finance" },
    { id: 10, firstName: "Helen", lastName: "Taylor", email: "helen@example.com", department: "Sales" },
  ]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  // Toggle form visibility for adding or editing a user
  const handleAddClick = () => {
    setUserToEdit(null);
    setFormVisible(true);
  };

  // Submit form for adding or editing a user
  const handleFormSubmit = (userData) => {
    if (userToEdit) {
      // Edit existing user
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userToEdit.id ? { ...user, ...userData } : user
        )
      );
    } else {
      // Add new user
      setUsers((prevUsers) => [
        ...prevUsers,
        { id: Date.now(), ...userData }, // Using Date.now() as a unique ID
      ]);
    }
    setFormVisible(false); // Close the form after submission
  };

  // Show the edit form with the user data
  const handleEditClick = (user) => {
    setUserToEdit(user);
    setFormVisible(true);
  };

  // Handle user deletion
  const handleDeleteClick = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  // Hide the form without saving
  const handleCancelClick = () => {
    setFormVisible(false);
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <button onClick={handleAddClick}>Add User</button>

      {isFormVisible && (
        <UserForm user={userToEdit} onSubmit={handleFormSubmit} onCancel={handleCancelClick} />
      )}

      <UserList
        users={users}
        onEdit={handleEditClick}
        onDelete={handleDeleteClick}
      />
    </div>
  );
};

export default App;
