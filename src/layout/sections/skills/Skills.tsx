import React from "react";
import { styled } from "styled-components";
import { SectionTitle } from "../../../components/sectionTittle/SectionTittle";
import { SectionText } from "../../../components/sectionTittle/SectionText";
import { Skill } from "./skill/Skill";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export const Skills = () => {
  return (
    <StyledSkills id="Tech Stack">
      <Container>
        <SectionTitle>My Tech Stack</SectionTitle>
        <SectionText> Technologies I’ve been working with recently</SectionText>
        <FlexWrapper wrap="wrap" justify="space-around " gap="95px">
          <Skill iconId={"htmlSvg"} title={"HTML5"} />
          <Skill iconId={"cssSvg"} title={"CSS3"} />
          <Skill iconId={"jsSvg"} title={"JS"} />
          <Skill iconId={"reactSvg"} title={"react"} />
          <Skill iconId={"vectorSvg"} title={"Redux"} viewBox="-5 0 115 110" />
          <Skill iconId={"sassSvg"} title={"sass"} viewBox="0 -12 120 120" />
          <Skill iconId={"gitSvg"} title={"git"} viewBox="-10 0 120 120" />
          <Skill iconId={"vscodeSvg"} title={"vscode"} />
          <Skill
            iconId={"githubSVvg"}
            title={"github"}
            viewBox="-15 -10 120 120"
          />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;
