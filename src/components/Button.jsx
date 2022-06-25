import styled from "styled-components";

const Button = styled.button`
  border: ${({ theme }) => (theme === "dark" ? "none" : "1px solid black")};
  background-color: transparent;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => (theme === "dark" ? "black" : "white")};
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};

  &:hover {
    background-color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
    color: ${({ theme }) => (theme === "dark" ? "black" : "white")};
    border: 1px solid black;
    transition: color 1s 0s, background-color 1s 0s;
  }
`;

export { Button };