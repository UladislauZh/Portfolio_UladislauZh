import React from "react";
import iconsSprite from "../assets/images/vector/icons_sprite.svg";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const PhotoAbstract = (props: IconPropsType) => {
  return (
    <svg
      width="770"
      height="770"
      viewBox="0 0 770 770"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  );
};
