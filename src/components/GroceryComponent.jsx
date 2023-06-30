import React, { useState, useRef } from "react";
import { v4 as uuid } from "uuid";
import { GroceryItemComponent } from "./GroceryItemComponent";
import { AiOutlineClear } from "react-icons/ai";

const GroceryComponent = () => {
  const inputRef = useRef();
  const [item, setItem] = useState("");
  const [groceryItems, setGroceryItems] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (item) {
      setGroceryItems([...groceryItems, { id: uuid(), name: item }]);
      setItem("");
      setError("");
    } else {
      setError("Input is empty!");
      inputRef.current.focus();
    }
  };

  const handleEditItem = (id, newItem) => {
    const updatedGroceryItems = groceryItems.map((item) => {
      if (item.id === id) {
        return { ...item, name: newItem };
      }
      return item;
    });
    setGroceryItems(updatedGroceryItems);
  };

  const handleDeleteItem = (deleteId) => {
    const filteredItems = groceryItems.filter((item) => item.id !== deleteId);
    setGroceryItems(filteredItems);
  };

  const handleClear = () => {
    setGroceryItems([]);
    setError("");
  };

  return (
    <div className="container flex flex-col justify-start items-center m-3 bg-body h-[52%] rounded-lg drop-shadow-2xl md:h-[600px] md:w-[500px] xl:w-[40%]">
      <h1 className="text-lg md:text-4xl pt-5 font-bold uppercase tracking-wider">
        Grocery Buddy
      </h1>
      <div className="pt-2 w-full px-10">
        {error ? (
          <p className="px-1 mb-3 text-red-500 text-sm md:text-lg text-center leading-3 font-semibold tracking-wide">
            {error}
          </p>
        ) : null}

        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            className="rounded h-9 text-sm w-full md:h-11 md:text-xl font-medium px-2 py-1 focus:outline-4 text-black outline-second placeholder-gray-600"
            type="text"
            placeholder="Enter an item..."
            value={item}
            onChange={(event) => {
              setItem(event.target.value);
            }}
          />
          <button
            className="w-full px-4 py-2 md:py-2 bg-gradient-to-r from-sky-900 to-sky-500 mt-2 rounded text-white text-sm md:text-xl hover:bg-gradient-to-l hover:from-sky-900 hover:to-sky-500"
            type="submit"
          >
            Add Item
          </button>
        </form>
      </div>
      <div
        id="ScrollNone"
        className="mt-2 mb-8 w-full px-10 rounded overflow-scroll"
      >
        {groceryItems.length > 0 ? (
          <ul className="rounded shadow-lg flex flex-col gap-2">
            {/* li components here */}
            {groceryItems.map((item) => (
              <GroceryItemComponent
                key={item.id}
                item={item}
                handleEditItem={handleEditItem}
                handleDeleteItem={handleDeleteItem}
              />
            ))}
          </ul>
        ) : (
          <h2 className="text-xl font-medium text-center pt-10">
            No list available!
          </h2>
        )}
      </div>
      {groceryItems.length > 0 ? (
        <button
          className="text-2xl absolute top-4 right-4 transition-all duration-300 ease-out hover:scale-110 hover:shadow-2xl
           hover:text-red-700"
          onClick={handleClear}
        >
          <AiOutlineClear />
        </button>
      ) : null}
    </div>
  );
};

export default GroceryComponent;
