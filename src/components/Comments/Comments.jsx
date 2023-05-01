import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom"
import { LiComment } from "../LiComment";

export function Comments(){
  let {id} = useParams();
  let [comments, setComments] = useState([])
  let [loading, setLoading] = useState(true);
  let num = 0
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/comments").then((json)=>{
      setLoading(false);
      setComments(json.data)
    })
  }, [])
  let findComments = comments.filter((com)=> com.postId == id)
  return (
    <section>
      <div className="container py-2">
        <ul classNames="nav flex-column">
          <li classNames="nav-item">
            <Link to="/">Back to users</Link>
          </li>
           <li classNames="nav-item">
            <Link to={`/posts/${id}`}>Back to posts</Link>
          </li>
        </ul>
        <ListGroup as="ul">
          {loading && <h1>Loading...</h1>}
          {!loading && findComments.map((comment, index)=>{
            num++
            return <ListGroup.Item as="li" key={index}>
              <LiComment number={num} post={id} name={comment.name} email={comment.email} body={comment.body}/>
            </ListGroup.Item>
          })}
        </ListGroup>
      </div>
    </section>
  )
}