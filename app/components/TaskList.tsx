import { useEffect, useState } from "react"
import { getAllTodo } from "../api"
import Task from "./Task"

function TaskList() {
  const [taskList, setTaskList] = useState<any[]>([])

  useEffect(() => {
    const fetchTodo = async () => {
      const todos = await getAllTodo();
      setTaskList(todos)
    };
    fetchTodo();
  }, [])
  
  return (
    <div className="pt-8 overflow-scroll max-h-96">
      {taskList.map((task: any) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList