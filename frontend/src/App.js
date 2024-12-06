

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UserList from './components/UserList';
import RoleList from './components/RoleList';
import PermissionForm from './components/PermissionForm';  
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/new" element={<UserForm />} /> {/* Route to add new user */}
        <Route path="/users/:id" element={<UserForm />} /> {/* Route to edit existing user */}
        <Route path="/users/details/:id" element={<UserDetails />} /> {/* Route for user details */}
        <Route path="/roles" element={<RoleList />} />
        <Route path="/permissions" element={<PermissionForm />} /> {/* Updated route for permissions */}
      </Routes>
    </Router>
  );
}

export default App;
