import axios, { Axios } from "axios";
import { List } from "./components/List";
import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Posts } from "./components/Posts";
import { Comments } from "./components/Comments/Comments";
import { PageNotFound } from "./components/PageNotFound";

export default function App(){
  let [data, setData] = useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((json)=> setData(json.data))
  }, [])
  return (
    <Routes>
      <Route path="/" element={<List data={data}/>}/>
      <Route path="/posts/:userId" element={<Posts/>}/>
      <Route path="/comments/:id" element={<Comments/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}