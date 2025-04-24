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
      <BackButton onClick={() => navigate("/users")}>Back</BackButton>
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
  max-width: 400px;
  width: 100%;
  margin: 40px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #2c3e50;
  }

  p {
    font-size: 16px;
    color: #555;
    margin: 6px 0;
  }
`;

const StyledP = styled.p`
  font-weight: bold;
  color: ${({ status }) =>
    status === "Alive" ? "#27ae60" : status === "Dead" ? "#e74c3c" : "#7f8c8d"};
  margin-top: 12px;
`;
const BackButton = styled.button`
  margin: 20px;
  padding: 10px 18px;
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #357ab8;
  }
`;
