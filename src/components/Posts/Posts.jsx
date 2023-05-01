import { Link, useParams } from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { ListGroup } from "react-bootstrap";
import { LiPost } from "../LiPost";

export function Posts(){
  let {userId} = useParams();
  let [posts, setPosts] = useState([])
  let [loading, setLoading] = useState(true)
  let num = 0;
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((json)=>{ 
    setLoading(false)
    setPosts(json.data)})
  },[])
  let findPosts = posts.filter((post)=> post.userId == userId);
  return (
    <section>
      <div className="container py-2">
        <ul classNames="nav flex-column">
          <li classNames="nav-item">
            <Link to="/">Back to users</Link>
          </li>
        </ul>
        <ListGroup as="ul">
          {loading && <h1>Loading...</h1>}
          {!loading && findPosts.map((post, index)=>{
            num++
            return <ListGroup.Item as="li" key={index}>
              <LiPost number={num} id={post.userId} title={post.title} body={post.body} postId={post.id}/>
            </ListGroup.Item>
          })}
        </ListGroup>
      </div>
    </section>
  )
}