// // // import React from "react";
// // // import UserList from "../components/UserList";
// // // import RoleList from "../components/RoleList";
// // // import PermissionForm from "../components/PermissionForm";

// // // const Dashboard = () => {
// // //   return (
// // //     <div>
// // //       <h1>Admin Dashboard</h1>
// // //       <UserList />
// // //       <RoleList />
// // //       <PermissionForm />
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;



// // import React from 'react';
// // import './Dashboard.css'; // Add new CSS for styling

// // const Dashboard = () => {
// //   return (
// //     <div className="dashboard">
// //       <header className="dashboard-header">
// //         <h1>Welcome to the Admin Dashboard</h1>
// //         <p>Manage users, roles, and permissions effectively and securely.</p>
// //       </header>

// //       <div className="dashboard-stats">
// //         <div className="card">
// //           <h3>Total Users</h3>
// //           <p>150</p>
// //         </div>
// //         <div className="card">
// //           <h3>Active Roles</h3>
// //           <p>12</p>
// //         </div>
// //         <div className="card">
// //           <h3>Pending Requests</h3>
// //           <p>5</p>
// //         </div>
// //       </div>

// //       <div className="dashboard-links">
// //         <a href="/users" className="link">
// //           Manage Users
// //         </a>
// //         <a href="/roles" className="link">
// //           Manage Roles
// //         </a>
// //         <a href="/permissions" className="link">
// //           Manage Permissions
// //         </a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;




// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link for navigation
// import './Dashboard.css'; // Ensure your CSS is linked correctly

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <header className="dashboard-header">
//         <h1>Welcome to the Admin Dashboard</h1>
//         <p>Manage users, roles, and permissions effectively and securely.</p>
//       </header>

//       <div className="dashboard-stats">
//         <div className="card">
//           <h3>Total Users</h3>
//           <p>150</p>
//         </div>
//         <div className="card">
//           <h3>Active Roles</h3>
//           <p>12</p>
//         </div>
//         <div className="card">
//           <h3>Pending Requests</h3>
//           <p>5</p>
//         </div>
//       </div>

//       <div className="dashboard-links">
//         <Link to="/users" className="link">
//           Manage Users
//         </Link>
//         <Link to="/roles" className="link">
//           Manage Roles
//         </Link>
//         <Link to="/permissions" className="link">
//           Manage Permissions
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;





import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';  // Ensure your CSS is linked correctly

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to the Admin Dashboard</h1>
        <p>Manage users, roles, and permissions effectively and securely.</p>
      </header>

      <div className="dashboard-stats">
        <div className="card">
          <h3>Total Users</h3>
          <p>150</p>
        </div>
        <div className="card">
          <h3>Active Roles</h3>
          <p>12</p>
        </div>
        <div className="card">
          <h3>Pending Requests</h3>
          <p>5</p>
        </div>
      </div>

      <div className="dashboard-links">
        <Link to="/users" className="link">
          Manage Users
        </Link>
        <Link to="/roles" className="link">
          Manage Roles
        </Link>
        <Link to="/permissions" className="link">
          Manage Permissions
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
