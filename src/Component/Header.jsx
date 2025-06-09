import React, { useState } from "react"
import { IoIosAdd } from "react-icons/io";

export default function Header({ addTask }) {
  const [taskInput, setTaskInput] = useState('');

  function handleAdd() {
    if (taskInput.trim() !== '') {
      addTask(taskInput, false)
      setTaskInput('')
    }
  }

  return (
    <header className="mt-10">
      <h1 className="font-extrabold text-4xl text-white-300 border-b-4 border-purple-500 p-2 w-fit mb-6">TASK TODO LIST</h1>
      <section className="flex border border-purple-400 w-[80%] p-3 m-2 rounded-lg">
        <input
          className="outline-none text-xl bg-gray-800 text-white w-full px-3 py-2 rounded"
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Write new task here...."
        />
        <button
          className="flex items-center bg-purple-600 hover:bg-purple-700 ml-2 p-2 rounded text-white text-xl"
          onClick={handleAdd}
        >
          <IoIosAdd className="text-2xl" /> ADD
        </button>
      </section>
    </header>
  )
}
