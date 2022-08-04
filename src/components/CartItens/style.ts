import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  justify-content: space-between;
  margin: 1rem auto 1rem;
  border: 2px solid rgba(97, 97, 97, 0.78);
  border-radius: 11px 0px 11px 0px;
  .name {
    width: 50%;
    margin-right: 1rem;
    font-weight: 600;
    > a{
      color: #111;
    }
  }
  .price {
    width: 20%;
    text-align: center;
    font-weight: 600;
  }
  button {
    padding: 10px;
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;
