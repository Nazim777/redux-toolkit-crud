import {  useParams } from "react-router";
import { useAppSelector, useAppDispatch } from "../../../redux/hook";
import { userSelector } from "../../../redux/features/users/userSlice";
import { useEffect } from "react";
import { getSingleUser } from "../../../redux/features/users/createAction";
import Loader from "../../../components/Loader";
import CardU from "../../../components/CardUI";
const UserDetails = () => {
  const params = useParams();
  const { id } = params;
  const { loading, singleuser } = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getSingleUser(id));
    }
  }, [id]);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10rem" }}>
        <CardU user={singleuser}/>
    </div>
  );
};

export default UserDetails;
