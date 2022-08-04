import styled from "styled-components";

export const Container = styled.div`
padding-top: 2.5rem;
  margin-right: 20px;
  margin-left: 20px;
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
  >h2{
    text-transform: capitalize;
    font-size: 3rem;
    font-weight: 600;
    color:#111;
    margin-bottom: 2rem;
  }
  .categoryContainer{
    display: flex;
    flex-wrap: wrap;
    > div{
        margin-left: 2.7rem;
    }
  }
`;
