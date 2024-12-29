import { Button, Card } from "react-bootstrap";
import { User } from "../redux/features/users/userSlice";
import { useNavigate } from "react-router";

type propsType= {
    user:User,
    handleClick?:(id:string)=>void
}

const CardU = ({user,handleClick}:propsType) => {
    const navigate = useNavigate()
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            email: {user.email}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            gender: {user.gender}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            age: {user.age}
          </Card.Subtitle>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            {handleClick?
            <>
            <Button
              style={{ marginRight: "4px" }}
              variant="outline-primary"
              onClick={() => navigate(`/user-details/${user.id}`)}
            >
              View
            </Button>
            <Button
              style={{ marginRight: "4px" }}
              variant="outline-warning"
              onClick={() => navigate(`/user-update/${user.id}`)}
            >
              Edit
            </Button>
            <Button
              variant="outline-danger"
              onClick={() => handleClick(user.id)}
            >
              Delete
            </Button>
            </>:
            <Button variant="primary" onClick={()=>navigate(-1)}>Go Back</Button>
            }
          </div>
        </Card.Body>
      </Card>
    </>
  );
};


export default CardU