import ListGroup from 'react-bootstrap/ListGroup';
import { Li } from '../Li/Li';

export function List({data}) {
  return (
    <div className="container py-2">
      <ListGroup as="ul">
        {
          data.map((user, index) =>{
            return <ListGroup.Item as="li" key={index}>
              <Li id={user.id} name={user.name} username={user.username}/>
            </ListGroup.Item>
          })
        }
      </ListGroup>
    </div>
  );
}