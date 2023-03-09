import { baseApi } from "./base"

export function getUsers(options) {
  return baseApi.get("users", options).then(res => res.data)
}

export function getUser(id, options) {
  return baseApi.get(`users/${id}`, options).then(res => res.data)
}
