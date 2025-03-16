import { baseApi } from "./base"

export function getTodos(options) {
  return baseApi.get("todos", options).then(res => res.data)
}
