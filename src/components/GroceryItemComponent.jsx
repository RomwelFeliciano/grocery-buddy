import React, { useState, useRef } from "react";
import { AiOutlineEdit, AiOutlineSave, AiOutlineDelete } from "react-icons/ai";

export const GroceryItemComponent = ({
  item,
  handleEditItem,
  handleDeleteItem,
}) => {
  const inputRef = useRef();
  const [isEditing, setIsEditing] = useState(false);
  const [newItem, setNewItem] = useState(item.name);
  const [error, setError] = useState("");

  const openEdit = () => {
    if (newItem) {
      handleEditItem(item.id, newItem);
      setIsEditing(false);
      setError("");
    } else {
      setError("Grocery item must not be empty!");
      inputRef.current.focus();
    }
  };

  return (
    <>
      <li className="flex justify-between items-center bg-white px-3 py-2 rounded text-sm md:text-lg shadow-2xl">
        {isEditing ? (
          <input
            ref={inputRef}
            className="bg-body w-full mr-3 rounded px-2 border-2 outline-second"
            type="text"
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
          />
        ) : (
          <span>{item.name}</span>
        )}

        <div className="flex gap-3">
          <button
            className="text-lg md:text-2xl text-neutral-700 transition-all duration-300 ease-out hover:scale-110"
            onClick={() => {
              isEditing ? openEdit() : setIsEditing(true);
            }}
          >
            {isEditing ? <AiOutlineSave color="green" /> : <AiOutlineEdit />}
          </button>
          <button
            className="text-lg md:text-2xl text-red-700 transition-all duration-300 ease-out hover:scale-110"
            onClick={() => {
              handleDeleteItem(item.id);
            }}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </li>
      {error ? (
        <p className="px-1 mb-3 text-red-500 text-sm md:text-lg text-center leading-3 font-semibold tracking-wide">
          {error}
        </p>
      ) : null}
    </>
  );
};
