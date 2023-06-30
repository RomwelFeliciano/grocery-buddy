import React from "react";
import GroceryComponent from "./components/GroceryComponent";
import "./App.css";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-stone-600 font-league">
      <GroceryComponent />
    </div>
  );
};

export default App;
