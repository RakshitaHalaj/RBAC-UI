




import React, { useEffect, useState } from 'react';
import { fetchUsers, addUser, updateUser, deleteUser } from '../mockApi'; 
import UserForm from './UserForm'; // Ensure correct path
import './UserList.css'; // Import the CSS file

const UserList = () => {
  const [users, setUsers] = useState([]);  // State to store users
  const [isEditMode, setIsEditMode] = useState(false); // To toggle edit mode
  const [selectedUser, setSelectedUser] = useState(null); // Store the user to be updated

  // Fetch users when the component is mounted
  useEffect(() => {
    const fetchAllUsers = async () => {
      const allUsers = await fetchUsers();
      setUsers(allUsers);
    };

    fetchAllUsers();
  }, []);

  // Handle adding a new user
  const handleAddUser = async (newUser) => {
    await addUser(newUser); // Add the user using the addUser function from mockApi
    const updatedUsers = await fetchUsers(); // Fetch updated user list
    setUsers(updatedUsers); // Update state
  };

  // Handle deleting a user
  const handleDeleteUser = async (userId) => {
    await deleteUser(userId); // Delete the user using the deleteUser function
    const updatedUsers = await fetchUsers(); // Fetch updated user list
    setUsers(updatedUsers); // Update state
  };

  // Handle updating a user
  const handleUpdateUser = async (updatedUser) => {
    await updateUser(updatedUser.id, updatedUser); // Update the user using the updateUser function
    const updatedUsers = await fetchUsers(); // Fetch updated user list
    setUsers(updatedUsers); // Update state
    setIsEditMode(false); // Exit edit mode
    setSelectedUser(null); // Reset selected user
  };

  return (
    <div className="user-list-container">
      <h2>Manage Users</h2>

      {/* Add New User Button */}
      <button className="add-user" onClick={() => { setIsEditMode(true); setSelectedUser(null); }}>Add New User</button>

      {/* Table for displaying users */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="user-row">
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button className="edit-user" onClick={() => { setSelectedUser(user); setIsEditMode(true); }}>Edit</button>
                <button className="delete-user" onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Show Add/Edit User Form */}
      {isEditMode && (
        <div className="user-form-container">
          <h3>{selectedUser ? "Edit User" : "Add User"}</h3>
          <UserForm
            user={selectedUser}  // Pass the selected user (if any) to the UserForm
            onSubmit={selectedUser ? handleUpdateUser : handleAddUser}  // Either handle add or update based on the mode
            onCancel={() => { setIsEditMode(false); setSelectedUser(null); }}  // Reset edit mode and user state
          />
        </div>
      )}
    </div>
  );
};

export default UserList;
