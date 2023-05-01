import { Link } from "react-router-dom";

export function Li({id, name, username}){
  return (
    <ul>
      <li>{id}</li>
      <li>Name: {name}</li>
      <li>Username: {username}</li>
      <li><Link to={`/posts/${id}`}>Posts</Link></li>
    </ul>
  )
}