import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CircleCheck, Trash2 } from "lucide-react"
import { deleteTodo, updateTodo } from "../api"

function Task(task: any) {
  const updateTask = async () => {
    const body = {
      isCompleted: !task.task.isCompleted 
    }
    try {
      await updateTodo(task.task.id,body);
      location.reload();
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTask = async () => {
    try {
      const res = await deleteTodo(task.task.id);
      if(res.msg) {
        alert(res.msg);
        location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex space-x-2 mb-3 pt-5 mx-auto md:w-2/6">
      <Input value={task.task.title} disabled/>
      <Button variant="ghost" size="sm" onClick={updateTask}>
        <CircleCheck color= {task.task.isCompleted  ? "green" : "black"}/>
        </Button>
      <Button variant="destructive" size="sm" onClick={deleteTask}><Trash2/></Button>
    </div>
  )
}

export default Task