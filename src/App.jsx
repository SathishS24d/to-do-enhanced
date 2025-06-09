import { useEffect, useState } from 'react'
import Header from './Component/Header'
import ToDoList from './Component/ToDoList'

function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || [])

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList])

  function addTask(newTask, status) {
    const newTaskList = [...taskList, { id: taskList.length, task: newTask, status: status }];
    setTaskList(newTaskList);
    alert("New task Added")
  }

  function editStatus(id, status) {
    const newTaskList = taskList.map((item) => {
      if (item.id === id) item.status = status;
      return item;
    })
    setTaskList(newTaskList)
  }

  function editTask(id, task) {
    const newTaskList = taskList.map((item) => {
      if (item.id === id) item.task = task;
      return item;
    })
    setTaskList(newTaskList)
  }

  function deleteTask(id) {
    const newTaskList = taskList.filter((task) => task.id !== id).map((task, index) => ({ ...task, id: index }))
    setTaskList(newTaskList)
    alert("Deleted")
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <center>
        <Header addTask={addTask} />
        <ToDoList taskList={taskList} deleteTask={deleteTask} editTask={editTask} editStatus={editStatus} />
      </center>
    </div>
  )
}

export default App