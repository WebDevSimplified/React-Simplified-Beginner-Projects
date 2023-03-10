import { baseApi } from "./base"

export function getComments(postId, options) {
  return baseApi.get(`posts/${postId}/comments`, options).then(res => res.data)
}
