import React, { useState, useRef } from "react";
import { AiOutlineEdit, AiOutlineSave, AiOutlineDelete } from "react-icons/ai";

export const GroceryItemComponent = ({
  item,
  handleEditItem,
  handleDeleteItem,
}) => {
  const editInputRef = useRef();
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
      editInputRef.current.focus();
    }
  };

  return (
    <>
      <li className="flex justify-between bg-neutral-100 px-3 py-2 rounded font-medium text-lg drop-shadow-xl">
        {isEditing ? (
          <input
            ref={editInputRef}
            className="bg-neutral-200 rounded px-2 border-2 border-blue-400 focus:outline-blue-400"
            type="text"
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
          />
        ) : (
          <span>{item.name}</span>
        )}

        <div className="flex gap-3">
          <button
            className="text-2xl text-neutral-700 transition-all duration-300 ease-out hover:scale-110"
            onClick={() => {
              isEditing ? openEdit() : setIsEditing(true);
            }}
          >
            {isEditing ? <AiOutlineSave color="green" /> : <AiOutlineEdit />}
          </button>
          <button
            className="text-2xl text-red-600 transition-all duration-300 ease-out hover:scale-110"
            onClick={() => {
              handleDeleteItem(item.id);
            }}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </li>
      {error ? (
        <p className="px-1 mb-3 text-red-600 text-lg text-center leading-3 font-bold tracking-wider">
          {error}
        </p>
      ) : null}
    </>
  );
};
