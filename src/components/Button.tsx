import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
  width: 170px;
  height: 32px;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  position: relative;

  border: none;
  outline: none;
  color: #fff;
  background-color: ${theme.colors.bgc};
  z-index: 0;
  border-radius: 10px;

  &::before {
    content: "";
    background: linear-gradient(45deg, #e70faa 15%, #00c0fd 17%);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(2px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:active {
    background-color: ${theme.colors.bgc};
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.bgc};
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;

// &:hover {
//   &::before {
//     height: 1px;
//     width: 50%;
//   }
// }

// &::before {
//   content: "";
//   display: inline-block;

//   background-color: ${theme.colors.accent};

//   position: absolute;
//   bottom: 4px;
//   left: 50%;
//   transform: translateX(-50%);
// }
