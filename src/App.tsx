import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import appRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <Router> {/* Use BrowserRouter instead of RouterProvider */}
     
     {appRoutes()} 
 
    </Router>
  );
}

export default App;

