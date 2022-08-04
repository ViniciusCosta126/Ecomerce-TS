import styled from "styled-components";

export const Container = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 2rem;
  text-align: center;
  @media (min-width: 768px) {
    margin-right: 50px;
    margin-left: 50px;
  }
  @media (min-width: 1024px) {
    margin-right: 80px;
    margin-left: 80px;
  }
  @media (min-width: 1440px) {
    margin-right: calc((100vw - 1350px) / 2);
    margin-left: calc((100vw - 1350px) / 2);
  }
  > h2{
    font-size: 2rem;
  }
  > p{
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 2rem;
  }
`

