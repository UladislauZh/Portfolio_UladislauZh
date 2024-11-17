import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
  width: 170px;
  height: 32px;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  position: relative;

  &:hover {
    &::before {
      height: 1px;
      width: 50%;
    }
  }

  &::before {
    content: "";
    display: inline-block;

    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
