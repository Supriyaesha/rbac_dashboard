// components/RoleManagement.js
import React, { useState } from "react";

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ]);

  const [newRole, setNewRole] = useState({ name: "", permissions: [] });

  const handleAddRole = () => {
    setRoles([...roles, { id: Date.now(), ...newRole }]);
    setNewRole({ name: "", permissions: [] });
  };

  return (
    <div className="role-management">
      <h2>Role Management</h2>
      <div>
        <input
          type="text"
          placeholder="Role Name"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Permissions (comma separated)"
          value={newRole.permissions}
          onChange={(e) =>
            setNewRole({
              ...newRole,
              permissions: e.target.value.split(",").map((perm) => perm.trim()),
            })
          }
        />
        <button onClick={handleAddRole}>Add Role</button>
      </div>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            {role.name} - Permissions: {role.permissions.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;
