import styled from "styled-components";

export const Container = styled.div`
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

export const SingleProductContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: space-around;

  > img {
    width: 40%;
    aspect-ratio: 1;
    border-radius: 10px;
    transition: all 0.2s ease-out;
  }
  > img:hover {
    transition: all 0.2s ease-in;
    box-shadow: 2px 3px 15px 4px rgba(0, 0, 0, 0.5);
  }
  .content-product {
    width: 50%;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 2.5rem;
      font-weight: 500;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    .description {
      color: #565758;
      font-weight: 400;
      margin-bottom: 2rem;
    }
    .price {
      font-weight: 600;
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
    > button {
      width: 75%;
      display: block;
      margin: 0 auto;
      padding: 20px 40px;
      font-size: 2rem;
      border: none;
      border-radius: 10px;
      text-transform: uppercase;
      background-color: rgb(89, 192, 11);
      color: #fff;
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 0.25s ease-out;
    }
    > button:hover {
      transition: all 0.25s ease-in;
      border: 1px solid rgb(89, 192, 11);
      background-color: #fff;
      color: rgb(89, 192, 11);
    }
  }
`;

export const RelatedProductsContainer = styled.div`
margin-top: 3rem;
>div{
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  > div{
    margin-left: 2.5rem;
  }
}
`