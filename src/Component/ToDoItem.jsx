import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

export default function ToDoItem({ id, task, status, deleteTask, editTask, editStatus }) {
  const [editOpen, setEditOpen] = useState(false)
  const [editValue, setEditValue] = useState(task)
  const [statusValue, setStatusValue] = useState(status)

  function handleStatus() {
    const value = !statusValue;
    setStatusValue(value)
    editStatus(id, value)
  }

  function handleEdit() {
    editTask(id, editValue);
    setEditOpen(false)
  }

  return (
    <article className="flex w-[80%] justify-between bg-gray-800 text-lg p-3 m-3 rounded-lg shadow-md">
      {editOpen ? (
        <>
          <input
            className="outline-none border-b-2 border-purple-500 bg-gray-700 text-white px-2 py-1 rounded"
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button
            onClick={handleEdit}
            className="ml-4 text-sm text-white bg-green-600 hover:bg-green-700 p-2 rounded"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <section className="flex items-center">
            <input
              className="mx-2 h-[20px] w-[20px] cursor-pointer"
              type="checkbox"
              checked={statusValue}
              onChange={handleStatus}
            />
            <p className={`${statusValue ? 'line-through text-gray-400' : 'text-white'}`}>{task}</p>
          </section>
          <section>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 mx-2 rounded"
              onClick={() => setEditOpen(true)}
            >
              <MdEdit />
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 text-white p-2 mx-2 rounded"
              onClick={() => deleteTask(id)}
            >
              <FaTrash />
            </button>
          </section>
        </>
      )}
    </article>
  )
}