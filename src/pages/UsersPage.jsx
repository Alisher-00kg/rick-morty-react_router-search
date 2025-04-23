import React, { useCallback, useEffect, useState } from "react";
import { axiosInstance } from "../api/axiosInstance";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const UsersPage = () => {
  const [users, setUsers] = useState(null);
  const navigate = useNavigate();

  const getUsers = useCallback(async () => {
    try {
      const { data } = await axiosInstance.get("/api/character");
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleNavigate = (id) => {
    navigate("/users/" + id);
  };
  return (
    <StyledWrapper>
      <StyledUl>
        {users?.results?.map((item) => (
          <CardStyle key={item.id} onClick={() => handleNavigate(item.id)}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <StyledP status={item.status}>{item.status}</StyledP>
          </CardStyle>
        ))}
      </StyledUl>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 100px 50px;
`;
const StyledUl = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;
const CardStyle = styled.li`
  width: fit-content;
  height: fit-content;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
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
