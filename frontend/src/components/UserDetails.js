
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUsers } from "../mockApi"; // Use fetchUsers to fetch the list of users

const UserDetails = () => {
  const { id } = useParams(); // Extract user ID from the URL
  const [user, setUser] = useState(null); // Initialize user state

  useEffect(() => {
    // Fetch the user details based on the ID
    const fetchUserDetails = async () => {
      try {
        const users = await fetchUsers(); // Fetch all users from the API
        console.log("Fetched users:", users); // Log fetched users for debugging
        const userDetails = users.find((user) => user.id === parseInt(id)); // Find the user by ID
        console.log("User details found:", userDetails); // Log the found user for debugging
        setUser(userDetails); // Set user details in state
      } catch (error) {
        console.error("Error fetching user details:", error); // Log error if fetching fails
      }
    };

    fetchUserDetails();
  }, [id]); // Dependency on id, will re-fetch if id changes

  return (
    <div className="user-details">
      {user ? (
        <div>
          <h3>User Details</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Status:</strong> {user.status}</p>
        </div>
      ) : (
        <p>Loading...</p> // Show loading text until user data is fetched
      )}
    </div>
  );
};

export default UserDetails;
