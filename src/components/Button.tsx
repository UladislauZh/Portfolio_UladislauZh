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

  background-color: ${theme.colors.bgc};
  z-index: 0;
  border-radius: 10px;
  /* overflow: visible; */

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border-radius: inherit;
    background: linear-gradient(45deg, #e70faa, #00c0fd, #e70faa);
    background-size: 400%; /* Позволяет градиенту двигаться */
    z-index: -1;
    animation: glowing 10s linear infinite; /* Добавляем движение */
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    filter: blur(2px);
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

  @keyframes glowing {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 400% 0%;
    }
    100% {
      background-position: 0% 0%;
    }
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
