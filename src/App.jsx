import React from "react";
import GroceryComponent from "./components/GroceryComponent";
import "./App.css";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[url(https://images.unsplash.com/photo-1580674287405-80cd77a2fee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)] bg-no-repeat bg-cover bg-center font-league">
      <GroceryComponent />
    </div>
  );
};

export default App;
