import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const UserCardItem = ({ id, image, name, status, episode }) => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate("/users/" + id);
  };
  return (
    <CardStyle onClick={() => handleNavigate(id)}>
      <img src={image} alt={name} />
      <h2>{name}</h2>

      <StyledP status={status}>{status}</StyledP>
      <p>Episode: ???</p>
      <StyledButton>Show More</StyledButton>
    </CardStyle>
  );
};
const CardStyle = styled.li`
  width: 220px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    button {
      visibility: visible;
    }
  }

  img {
    width: 100%;
    border-radius: 12px;
    object-fit: cover;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 8px;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`;
const StyledP = styled.p`
  font-weight: bold;
  margin-top: 10px;
  color: ${({ status }) =>
    status === "Alive" ? "#27ae60" : status === "Dead" ? "#e74c3c" : "#7f8c8d"};
`;
const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 20px;
  visibility: hidden;
  &:hover {
    background-color: #357ab8;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
