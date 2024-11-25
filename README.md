RBAC Dashboard Application


This is a simple Role-Based Access Control (RBAC) dashboard application built with React. It provides features to manage users, roles, and visualize data with charts.

Features
User Management

Add and manage users.
Display a list of users with their name, role, and status.
Role Management

Add and manage roles.
Display a list of roles with associated permissions.
Charts

Line Chart: Displays the growth of users and roles over time.
Bar Chart: Displays the distribution of roles.
Header

A simple header displaying the title of the dashboard.
Components
1. Header
File: components/Header.js
Displays the application title.
2. UserManagement
File: components/UserManagement.js
Allows managing users with options to add and display user information.
3. RoleManagement
File: components/RoleManagement.js
Allows managing roles with options to add and display role details.
4. Charts
File: components/Charts.js
Visualizes user and role data using Recharts.
Line Chart: User and role growth over months.
Bar Chart: Role distribution.
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your-repository/rbac-dashboard.git
Navigate to the project directory:
bash
Copy code
cd rbac-dashboard
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm start
Open the app in your browser at http://localhost:3000.
Usage
Add Users: Use the input fields under User Management to add users with their name, role, and status.
Add Roles: Use the input fields under Role Management to add roles and define permissions.
View Data: Check user and role growth and role distribution under Charts.
Technologies Used
Frontend:

React
Recharts (for data visualization)
Styling:

CSS (app.css)
