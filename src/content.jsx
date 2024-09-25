import AddTask from "./add_task";
import Tasks from "./tasks";
import React, { useState, useEffect } from "react";


export default function Content() {
  const initial = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initial);
  const [taskIdCounter, setTaskIdCounter] = useState(0);
  const [newTask, setNewTask] = useState({
    id: 0,
    title: "",
    description: "",
    isCompleted: false,
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.title.trim() !== "") {
      const id = taskIdCounter;
      setTasks([...tasks, { id, ...newTask }]);
      setNewTask({
        id: taskIdCounter,
        title: "",
        description: "",
        isCompleted: false,
      });
      setTaskIdCounter(taskIdCounter + 1);
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: true } : task
      )
    );
  };
  const uncompleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: false } : task
      )
    );
  };

  return (
    <div className="flex-grow px-[3.438rem] flex justify-center">
      <div className="max-w-[50.846rem] flex-grow h-full ">
        <div className="w-full h-[3.25rem] flex items-center">
          <div className="text-[1.625rem] font-[700] font-segoe-ui text-[#202020]">
            Inbox
          </div>
        </div>
        <div className="w-full flex flex-col pt-[0.625rem]">
          <AddTask add={addTask} newTask={newTask} setNew={setNewTask} />
          <Tasks
            tasks={tasks}
            remove={removeTask}
            complete={completeTask}
            uncomplete={uncompleteTask}
          />
        </div>
      </div>
    </div>
  );
}
