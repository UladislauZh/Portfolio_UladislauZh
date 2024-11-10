import React from "react";
import { styled } from "styled-components";
import { Icon } from "../../../components/icon/Icon";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle></SectionTitle>
      <FlexWrapper>
        <Icon iconId={"htmlSvg"} />
        <Icon iconId={"cssSvg"} />
        <Icon iconId={"jsSvg"} />
        <Icon iconId={"reactSvg"} />
        <Icon iconId={"vectorSvg"} />
        <Icon iconId={"bootstrapSvg"} />
        <Icon iconId={"tailwindSvg"} />
        <Icon iconId={"sassSvg"} />
        <Icon iconId={"gitSvg"} />
        <Icon iconId={"greensockSvg"} />
        <Icon iconId={"vscodeSvg"} />
        <Icon iconId={"githubSVvg"} />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;
