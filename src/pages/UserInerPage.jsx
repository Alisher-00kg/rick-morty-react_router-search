import React, { useCallback, useEffect, useState } from "react";
import { axiosInstance } from "../api/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

export const UserInerPage = () => {
  const [user, setUser] = useState(null);
  const { userID } = useParams();
  const navigate = useNavigate();
  const getUser = useCallback(async () => {
    try {
      const { data } = await axiosInstance.get("/api/character/" + userID);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }, [userID]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div>
      <button onClick={() => navigate("/users")}>Back</button>
      {user && (
        <CardStyle>
          <img src={user.image} alt={user.name} />
          <h2>{user.name}</h2>
          <StyledP status={user.status}>{user.status}</StyledP>
          <p>{user.gender}</p>
          <p>{user.species}</p>
        </CardStyle>
      )}
    </div>
  );
};

const CardStyle = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  img {
    margin-bottom: 15px;
  }
`;
const StyledP = styled.p`
  font-weight: 900;
  color: ${(props) =>
    props.status === "Alive"
      ? "green"
      : props.status === "Dead"
      ? "red"
      : props.status === "Unknown"
      ? "black"
      : "black"};
  margin-top: 10px;
`;
