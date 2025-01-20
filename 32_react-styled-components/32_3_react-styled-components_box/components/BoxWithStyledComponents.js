import styled from "styled-components";

export default styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ $isBlack }) => ($isBlack ? "black" : "green")};
  &:hover {
    blackground-color: red;
  }
  margin: 2rem;
`;
