import { Link } from "react-router-dom";

export function PageNotFound(){
  return <div className="container py-2">
    <ul classNames="nav flex-column">
      <li classNames="nav-item">
        <Link to="/">Back to users</Link>
      </li>
    </ul>
    <h1 className="text-center" style={{fontSize: "50px"}}>PAGE NOT FOUND</h1>
  </div>
}