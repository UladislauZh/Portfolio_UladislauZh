import React from "react";
import styled from "styled-components";
import { Menu } from "../../../../components/menu/Menu";

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
      <Menu menuItems={projectItems} />
      <Link href={"#"}>Live Preview</Link>
      <Link href={"#"}>View Code</Link>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  background-color: #ff3869;
  max-width: 375px;
  width: 100%;
  margin: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const Link = styled.a``;

const Title = styled.h4``;

const Text = styled.p``;
