import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ taskList, deleteTask, editTask, editStatus }) {
  return (
    <main className="mt-[40px]">
      {taskList.map((item) => (
        <ToDoItem
          key={item.id}
          id={item.id}
          task={item.task}
          status={item.status}
          deleteTask={deleteTask}
          editTask={editTask}
          editStatus={editStatus}
        />
      ))}
    </main>
  )
}
