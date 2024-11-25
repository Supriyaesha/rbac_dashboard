import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { BarChart, Bar } from "recharts";

// Sample data for the charts
const lineData = [
  { name: "Jan", users: 1200, roles: 400 },
  { name: "Feb", users: 1500, roles: 600 },
  { name: "Mar", users: 1700, roles: 800 },
  { name: "Apr", users: 1300, roles: 500 },
  { name: "May", users: 2000, roles: 1200 },
];

const barData = [
  { name: "Admin", value: 5 },
  { name: "User", value: 15 },
  { name: "Manager", value: 3 },
  { name: "Super Admin", value: 2 },
];

const Charts = () => {
  return (
    <div>
      <h2>RBAC Dashboard Charts</h2>

      <div className="charts-container">
        {/* LineChart: User and Role growth */}
        <div className="chart-card">
          <h3>User and Role Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#8884d8" />
              <Line type="monotone" dataKey="roles" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* BarChart: Role distribution */}
        <div className="chart-card">
          <h3>Role Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Charts;
