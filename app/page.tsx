"use client";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export default function Home() {
  return (
    <main>
      <Header/>
      <AddTask/>
      <TaskList/>
    </main>
  );
}
