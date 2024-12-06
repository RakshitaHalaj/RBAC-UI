// // let users = [
// //   { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
// //   { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
// // ];

// // let roles = [
// //   { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
// //   { id: 2, name: "User", permissions: ["Read"] },
// // ];

// // // Simulate fetching users
// // export const fetchUsers = async () => {
// //   return new Promise((resolve) => setTimeout(() => resolve(users), 500));
// // };

// // // Simulate fetching roles
// // export const fetchRoles = async () => {
// //   return new Promise((resolve) => setTimeout(() => resolve(roles), 500));
// // };

// // // Simulate adding a user
// // export const addUser = async (user) => {
// //   return new Promise((resolve) => {
// //     users.push({ ...user, id: users.length + 1 });
// //     setTimeout(() => resolve(user), 500);
// //   });
// // };

// // // Simulate adding a role
// // export const addRole = async (role) => {
// //   return new Promise((resolve) => {
// //     roles.push({ ...role, id: roles.length + 1 });
// //     setTimeout(() => resolve(role), 500);
// //   });
// // };



// // mockApi.js (in backend folder)
// const users = [
//   { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
//   { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Inactive' },
// ];

// export const getUsers = () => {
//   return users;
// };

// export const addUser = (user) => {
//   users.push(user);
//   return user;
// };

// export const updateUser = (id, updatedUser) => {
//   const userIndex = users.findIndex(user => user.id === id);
//   if (userIndex > -1) {
//     users[userIndex] = { ...users[userIndex], ...updatedUser };
//     return users[userIndex];
//   }
//   return null;
// };

// export const deleteUser = (id) => {
//   const userIndex = users.findIndex(user => user.id === id);
//   if (userIndex > -1) {
//     const deletedUser = users.splice(userIndex, 1);
//     return deletedUser[0];
//   }
//   return null;
// };



// mockApi.js

// Mocked user data
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' }
];

// Mocked roles data
let roles = [
  { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
  { id: 2, name: 'User', permissions: ['Read'] }
];

// Fetch users
export const fetchUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(users), 1000); // Simulating a delay
  });
};

// Add a user
export const addUser = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      users.push({ id: users.length + 1, ...user });
      resolve();
    }, 1000); // Simulating a delay
  });
};

// Update a user
export const updateUser = (id, updatedUser) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      users = users.map((user) => (user.id === id ? { ...user, ...updatedUser } : user));
      resolve();
    }, 1000); // Simulating a delay
  });
};

// Delete a user
export const deleteUser = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      users = users.filter((user) => user.id !== id);
      resolve();
    }, 1000); // Simulating a delay
  });
};

// Fetch roles
export const fetchRoles = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(roles), 1000); // Simulating a delay
  });
};

// Add a role
export const addRole = (role) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      roles.push({ id: roles.length + 1, ...role });
      resolve();
    }, 1000); // Simulating a delay
  });
};

// Delete a role (optional function if needed)
export const deleteRole = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      roles = roles.filter((role) => role.id !== id);
      resolve();
    }, 1000); // Simulating a delay
  });
};


