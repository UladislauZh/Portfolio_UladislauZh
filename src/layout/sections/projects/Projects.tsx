import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTittle/SectionTittle";
import { SectionText } from "../../../components/sectionTittle/SectionText";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import projectImg1 from "../../../assets/images/rastr/project_1.jpg";
import projectImg2 from "../../../assets/images/rastr/project_2.jpg";
import projectImg3 from "../../../assets/images/rastr/project_3.jpg";
import projectImg4 from "../../../assets/images/rastr/project_4.jpg";
import projectImg5 from "../../../assets/images/rastr/project_5.jpg";
import projectImg6 from "../../../assets/images/rastr/project_6.jpg";

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>Projects</SectionTitle>
      <SectionText>Things I’ve built so far</SectionText>
      <FlexWrapper justify="space-around" wrap="wrap">
        <Project
          title="Project Tile goes here"
          text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          src={projectImg1}
        />
        <Project
          title="Project Tile goes here"
          text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          src={projectImg2}
        />
        <Project
          title="Project Tile goes here"
          text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          src={projectImg3}
        />
        <Project
          title="Project Tile goes here"
          text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          src={projectImg4}
        />
        <Project
          title="Project Tile goes here"
          text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          src={projectImg5}
        />
        <Project
          title="Project Tile goes here"
          text="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          src={projectImg6}
        />
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: #fbe8fd;
`;
