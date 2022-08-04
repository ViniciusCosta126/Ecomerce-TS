import styled from "styled-components";

export const ContainerCentralizar = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
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
export const Container = styled.nav`
  background-color: #eaeaea;
  a {
    color: #000;
  }
  a:visited {
    color: #000;
  }
  color: #000;
`;
export const Logo = styled.div`
  font-size: 32px;
`;

export const NavLinks = styled.ul`
 
  input[type="checkbox"] {
    display: none;
  }
  .hamburger {
    display: none;
    font-size: 24px;
    user-select: none;
  }
  @media (max-width: 768px) {
    input[type="checkbox"]:checked ~ .menu {
      display: block;
    }
    .hamburger {
      display: block;
    }
  }
`;

export const Menu = styled.div`
 
  @media (max-width: 768px) {
    display: none;
    position: absolute;
    background-color: #eaeaea;
    right: 0;
    left: 0;
    text-align: center;
    padding: 16px 0;
    li:hover {
      display: inline-block;
      background-color: #4c9e9e;
      transition: 0.3s ease;
    }
    li + li {
      margin-top: 12px;
    }
    .dropdown {
      left: 50%;
      top: 30px;
      transform: translateX(35%);
    }
    .dropdown li:hover {
      background-color: #4c9e9e;
    }
  }

  display: flex;
  gap: 1em;
  font-size: 18px;
  li {
    padding: 5px 14px;
  }
  li:hover {
    background-color: #c4c4c4;
    border-radius: 5px;
    transition: 0.3s ease;
  }
  .services {
    position: relative;
  }
  .dropdown {
    background-color: #eaeaea;
    padding: 1em 0;
    position: absolute;
    display: none;
    border-radius: 8px;
    top: 34px;
    left: 0;
  }
  .dropdown li + li {
    margin-top: 10px;
  }
  .dropdown li {
    padding: 0.5em 1em;
    width: 12rem;
    text-align: center;
  }
  .dropdown li:hover {
    background-color: #c4c4c4;
  }
  .services:hover .dropdown {
    display: block;
  }
`;
