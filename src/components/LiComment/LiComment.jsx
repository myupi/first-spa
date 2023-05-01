export function LiComment({number, post, name, email, body}){
  return (
    <ul>
      <li>{number}</li>
      <li>PostID: {post}</li>
      <li>Name: {name}</li>
      <li>Email: {email}</li>
      <li>Comment: {body}</li>
    </ul>
  )
}