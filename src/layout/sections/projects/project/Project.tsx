import React from "react";
import styled from "styled-components";
import { ProjectStack } from "../project/ProjectStack";
import { theme } from "../../../../styles/Theme";

const projectItems = ["HTML", "JavaScript", "SASS", "React"];

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Project = (props: WorkPropsType) => {
  return (
    <StyledProject>
      <Image src={props.src} alt="" />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      {/* <ProjectStack menuItems={projectItems} /> */}
      <Link href={"#"}>Live Preview</Link>
      <Link href={"#"}>View Code</Link>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  max-width: 375px;
  width: 100%;
`;

const Image = styled.img`
  width: 375px;
  height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
  margin-bottom: 25px;
`;

const Title = styled.h4`
  font-weight: 500;
  font-size: 28px;
  text-align: center;
  color: #000;
  margin-bottom: 15px;
`;

const Text = styled.p`
  max-width: 315px;
  font-weight: 300;
  font-size: 18px;
  line-height: 144%;
  color: ${theme.colors.font};
  text-align: left;
  margin: 0 35px 0 30px;
`;

const Link = styled.a``;
