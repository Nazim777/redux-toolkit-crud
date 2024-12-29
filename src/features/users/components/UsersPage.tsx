import { useAppSelector, useAppDispatch } from "../../../redux/hook";
import { userSelector } from "../../../redux/features/users/userSlice";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { getusers,deleteUser } from "../../../redux/features/users/createAction";
import Loader from "../../../components/Loader";
import CardU from "../../../components/CardUI";
import {toast } from 'react-toastify';


const UsersPage = () => {
  const { loading, error, users } = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  console.log('error',error)

  useEffect(() => {
    dispatch(getusers());
  }, []);

  if (loading) {
    return (
      <>
       <Loader/>
      </>
    );
  }
 

  const handleClick = (id:string) =>{
    dispatch(deleteUser(id))
    toast.warn('User Deleted Successfully!',{
      theme: "dark"
    })
  }


 

  return (
    <>
    <Container>
      <Row className="justify-content-center">
        {users.length > 0 &&
          users.map((user) => (
            <Col xs={12} sm={6}  lg={4} key={user.id} className="d-flex justify-content-center mb-4">
              <CardU user={user}handleClick={handleClick}/>
            </Col>
          ))}
      </Row>
    </Container>
    </>
  );
};

export default UsersPage;
