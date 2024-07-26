import { AppURL } from "./enum/AppURL";

export async function getAllTodo() {
  const response = await fetch(`${AppURL.url}gets`, {
    method: "GET"
  })

  return response.json();
}
export async function createTodo(body: any[]) {
  const response = await fetch(`${AppURL.url}create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  })

  return response.json();
}
export async function updateTodo(id: number, body: any) {
  const response = await fetch(`${AppURL.url}update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
  return response.json();
}
export async function deleteTodo(id: number) {
  const response = await fetch(`${AppURL.url}delete/${id}`, {
    method: "DELETE"
  })
  return response.json();
}
