import styled from "styled-components";

export const Container = styled.main`
  padding-top: 3rem;
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
`;

export const Hero = styled.div`
  width: 100%;
  max-height: 600px;

  > img {
    box-shadow: 5px 5px 15px -3px #000000;
    width: 75%;
    display: block;
    margin: 0 auto;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    > img {
      width: 100%;
    }
  }
`;
export const ContainerProducts = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
