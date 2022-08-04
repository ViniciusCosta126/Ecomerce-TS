import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  min-height: 400px;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.15s ease-out;
  .image-container {
    background-color: #fff;
    > img {
      width: 50%;
      aspect-ratio: 1;
      display: block;
      margin: 0 auto;
    }
  }
  &:hover {
    transition: all 0.15s ease-in;
    box-shadow: 2px 3px 15px 4px rgba(0, 0, 0, 0.5);
  }
`;
export const ContentContainr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 1rem;
  > h3 {
    font-weight: 500;
  }
  > p {
    color: #565758;
    font-size: 14px;
    font-weight: 400;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  > div {
    button {
      margin-right: 10px;
      outline: none;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s ease-out;
      > a{
        color: #000;
      }
    }
    button:first-child {
      border: 1px solid #e8e8e8;
      background-color: #fff;
    }
    button:first-child:hover {
      background-color: #008682;
      color: #fff;
      > a{
        color: #fff;
      }
    }
    button:last-child {
      background-color: rgb(89, 192, 11);
      color: #fff;
    }
  }
`;
