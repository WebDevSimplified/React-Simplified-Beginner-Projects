import { baseApi } from "./base"

export function getPosts(options) {
  return baseApi.get("posts", options).then(res => res.data)
}

export function getPost(postId, options) {
  return baseApi.get(`posts/${postId}`, options).then(res => res.data)
}
