import React from "react";
import { styled } from "styled-components";
import { SectionTitle } from "../../../components/sectionTittle/SectionTittle";
import { SectionText } from "../../../components/sectionTittle/SectionText";
import { Skill } from "./skill/Skill";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Tech Stack</SectionTitle>
      <SectionText> Technologies I’ve been working with recently</SectionText>
      <FlexWrapper wrap="wrap" justify="space-around ">
        <Skill iconId={"htmlSvg"} title={"HTML5"} />
        <Skill iconId={"cssSvg"} title={"CSS3"} />
        <Skill iconId={"jsSvg"} title={"JS"} />
        <Skill iconId={"reactSvg"} title={"react"} />
        <Skill iconId={"vectorSvg"} title={"vector"} />
        <Skill iconId={"bootstrapSvg"} title={"bootstrap"} />
        <Skill iconId={"tailwindSvg"} title={"tailwind"} />
        <Skill iconId={"sassSvg"} title={"sass"} />
        <Skill iconId={"gitSvg"} title={"git"} />
        <Skill iconId={"greensockSvg"} title={"greensock"} />
        <Skill iconId={"vscodeSvg"} title={"vscode"} />
        <Skill iconId={"githubSVvg"} title={"github"} />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #f6e6ff;
  min-height: 100vh;
`;
