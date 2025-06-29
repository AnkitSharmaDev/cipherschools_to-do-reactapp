// import { Component } from "react";
import AddTask from "./components/AddTak";
import { TaskProvider } from "./context/TaskContext";
import ToDoScreen from "./screens/ToDoScreen";
import { Routes } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { TaskProvider } from "./context/TaskContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ToDoScreen />,
  },
  {
    path: "/add-task",
    element: <AddTask />,
  },
]);

const App = () => {
  return (
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  );
};

export default App;
