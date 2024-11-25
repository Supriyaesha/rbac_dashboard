// App.js
import React from "react";
import Header from "../src/Components/Header"
import UserManagement from "../src/Components/UserManagement"
import RoleManagement from "../src/Components/RoleManagement"
import "./app.css";
import Charts from "./Components/Charts";

const App = () => {
  return (
    <div className="app">
    <Header />
      <div className="content">
        <UserManagement />
        <RoleManagement />
      </div>
      <br />
      <br />
      <Charts />
    </div>
  );
};

export default App;



