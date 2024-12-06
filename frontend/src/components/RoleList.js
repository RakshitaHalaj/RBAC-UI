import React, { useEffect, useState } from "react";
import { fetchRoles } from "../mockApi";

const RoleList = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const loadRoles = async () => {
      const data = await fetchRoles();
      setRoles(data);
    };
    loadRoles();
  }, []);

  return (
    <div>
      <h3>Role Management</h3>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleList;
