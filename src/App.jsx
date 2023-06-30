import React from "react";
import GroceryComponent from "./components/GroceryComponent";
import "./App.css";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[url(./background.jpg)] bg-no-repeat bg-cover bg-center font-league">
      <GroceryComponent />
    </div>
  );
};

export default App;
