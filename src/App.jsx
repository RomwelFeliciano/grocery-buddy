import React from "react";
import GroceryComponent from "./components/GroceryComponent";
import "./App.css";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[url(https://images.pexels.com/photos/3987223/pexels-photo-3987223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-no-repeat bg-cover bg-center font-league">
      <GroceryComponent />
    </div>
  );
};

export default App;
