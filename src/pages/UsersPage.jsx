import React, { useCallback, useEffect, useState } from "react";
import { axiosInstance } from "../api/axiosInstance";
import styled from "styled-components";
import { SearchBar } from "../components/SearchBar";
import { FilterBar } from "../components/FilterBar";
import { UserCardItem } from "../components/UserCardItem";
import { useDebounce } from "use-debounce";
import { useNavigate, useSearchParams } from "react-router-dom";
import { serializeToQueryParams } from "../utils/helpers";

const getUsers = async (searchDebounce, genderParams, statusParams, page) => {
  // const searchRequest = `?name=${searchDebounce}`;
  const searchRequest = serializeToQueryParams({
    name: searchDebounce,
    gender: genderParams,
    status: statusParams,
    page: page,
  });

  try {
    const { data } = await axiosInstance.get("/api/character" + searchRequest);
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export const UsersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDebounce] = useDebounce(searchTerm, 1000);
  const [isSearched] = useSearchParams();
  const [users, setUsers] = useState(null);
  const [page, setPage] = useState(1);
  const genderParams = isSearched.get("gender") || " ";
  const statusParams = isSearched.get("status") || " ";
  const navigate = useNavigate();
  useEffect(() => {
    getUsers(searchDebounce, genderParams, statusParams, page)
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, [searchDebounce, genderParams, statusParams, page]);

  const handleReset = () => {
    setSearchTerm("");
    setPage(1);
    navigate("/users");
  };
  return (
    <StyledWrapper>
      <div
        style={{
          width: "100%",
        }}
      >
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FilterBar />
      </div>
      <StyledButton
        onClick={handleReset}
        style={{
          width: "200px",
        }}
      >
        Reset All
      </StyledButton>

      <StyledUl>
        {users?.map((item, index) => (
          <UserCardItem key={item.id ?? `user-${index}`} {...item} />
        ))}
      </StyledUl>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "100px",
        }}
      >
        <StyledButton onClick={() => setPage(page - 1)}>prev</StyledButton>
        <StyledButton onClick={() => setPage(page + 1)}>next</StyledButton>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 100px 100px;
`;
const StyledUl = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
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
