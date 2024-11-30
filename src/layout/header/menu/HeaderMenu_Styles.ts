import { theme } from "../../../styles/Theme";
import { css, styled } from "styled-components";

const Link = styled.a`
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  color: transparent;

  &::before {
    content: "";
    height: 3px;
    background-image: linear-gradient(90deg, #83caeb 0%, #b380ee 100%);
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }
  }
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;

  color: ${theme.colors.font};

  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const MenuItem = styled.li`
  position: relative;

  &::before {
    content: "";
    height: 3px;
    background-image: linear-gradient(90deg, #83caeb 0%, #b380ee 100%);
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(1px);
      color: ${theme.colors.accent};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-1px);
      }
    }
  }
`;

// MOBILE

const MobileMenu = styled.nav``;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(31, 31, 32, 0.9);

  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    gap: 30px;
    flex-direction: column;
    align-items: center;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 40px;
  height: 40px;
  top: 20px;
  right: 25px;
  z-index: 999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: white;
    position: absolute;
    left: 2px;
    bottom: 18px;

    /* bottom-90px */

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: white;
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: white;
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
    }

    @media ${theme.media.mobile} {
    }
  }
`;

// DESKTOP

const DesctopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;

export const S = {
  MenuItem,
  Link,
  Mask,
  MobileMenu,
  MobileMenuPopup,
  BurgerButton,
  DesctopMenu,
};
