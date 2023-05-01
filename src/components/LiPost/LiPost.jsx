import { Link } from "react-router-dom";

export function LiPost({number, id, title, body, postId}){
  return <ul>
    <li>{number}</li>
    <li>User: {id}</li>
    <li>Title: {title}</li>
    <li>Body: {body}</li>
    <li><Link to={`/comments/${postId}`}>Show comments</Link></li>
  </ul>
}