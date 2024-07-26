import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"
import { createTodo } from "../api"
import { useState } from "react"

function AddTask() {
  const [newTask, setNewTask] = useState("")

  const handleInput = (event) => {
    setNewTask(event.target.value);
  }
  const addTodo = async () => {
    const body = 
    [{
      title: newTask,
      isCompleted: false
    }]
    try {
      await createTodo(body);
      location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex space-x-2 pt-16 w-5/6 mx-auto md:w-2/6">
        <Input
        value={newTask}
        onChange={handleInput}
          placeholder="Add Todo"
        />
        <Button onClick={addTodo}><Plus/></Button>
      </div>
  )
}

export default AddTask