


import React, { useState } from "react";
import { addRole } from "../mockApi";
import { FaKey, FaUserShield } from 'react-icons/fa';  // Importing icons
import './PermissionForm.css';


const PermissionForm = () => {
  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRole = {
      name: roleName,
      permissions: permissions.split(",").map((perm) => perm.trim()),
    };
    await addRole(newRole);
    alert("Role added successfully!");
    setRoleName("");
    setPermissions("");
  };

  return (
    <div className="permission-form-container">
      <div className="permission-form-card">
        <h3><FaKey /> Add New Role</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label><FaUserShield /> Role Name:</label>
            <input
              type="text"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
              required
              placeholder="Enter role name"
            />
          </div>

          <div className="form-field">
            <label><FaKey /> Permissions (comma-separated):</label>
            <input
              type="text"
              value={permissions}
              onChange={(e) => setPermissions(e.target.value)}
              required
              placeholder="Enter permissions (e.g., read, write)"
            />
          </div>

          <button type="submit" className="submit-btn">Add Role</button>
        </form>
      </div>
    </div>
  );
};

export default PermissionForm;




// // PermissionForm.js
// import React, { useState } from "react";
// import { addRole } from "../mockApi"; // Import the addRole function

// const PermissionForm = () => {
//   const [roleName, setRoleName] = useState("");
//   const [permissions, setPermissions] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newRole = {
//       name: roleName,
//       permissions: permissions.split(",").map((perm) => perm.trim()),
//     };
//     await addRole(newRole); // Calling the addRole function
//     alert("Role added successfully!");
//     setRoleName("");
//     setPermissions("");
//   };

//   return (
//     <div>
//       <h3>Add New Role</h3>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Role Name:</label>
//           <input
//             type="text"
//             value={roleName}
//             onChange={(e) => setRoleName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Permissions (comma-separated):</label>
//           <input
//             type="text"
//             value={permissions}
//             onChange={(e) => setPermissions(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Add Role</button>
//       </form>
//     </div>
//   );
// };

// export default PermissionForm;
