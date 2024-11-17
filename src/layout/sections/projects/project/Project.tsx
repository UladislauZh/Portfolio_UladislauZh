import React from "react";
import styled from "styled-components";
import { ProjectMenu } from "./ProjectMenu";
import { theme } from "../../../../styles/Theme";
import image1 from "../../../../assets/images/vector/link_vector/ghLinkVector.svg";
import { Icon } from "../../../../components/icon/Icon";
import { Button } from "../../../../components/Button";

const projectItems = ["HTML", "JavaScript", "SASS", "React"];

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Project = (props: WorkPropsType) => {
  return (
    <StyledProject>
      <ImageWrapper>
        <Image src={props.src} alt="" />
        <Button>Viev project</Button>
      </ImageWrapper>
      <Description>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <ProjectMenu menuItems={projectItems} />
        <SectionLinks>
          <SectionLink>
            <Icon
              iconId={"linkVector"}
              width="18"
              height="18"
              viewBox="0 0 18 18"
            />
            <Link href={"#"}>Live Preview</Link>
          </SectionLink>
          <SectionLink>
            <Icon
              iconId={"ghBlack"}
              width="20"
              height="20"
              viewBox="0 0 20 20"
            />
            <Link href={"#"}> View Code</Link>
          </SectionLink>
        </SectionLinks>
      </Description>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  max-width: 375px;
  width: 100%;
  margin-bottom: 60px;
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0px #00000033;
`;

const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(8px);
    }

    ${Button} {
      opacity: 1;
    }
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Image = styled.img`
  width: 375px;
  height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
  /* margin-bottom: 25px; */
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 35px 25px 30px;
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
  margin-bottom: 12px;
`;

const SectionLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SectionLink = styled.div`
  position: relative;
`;

const Link = styled.a`
  color: #000;
  /* text-decoration-line: underline; */
  margin-left: 10px;

  &:hover {
    &::before {
      height: 1px;
    }
  }

  &::before {
    content: "";
    display: inline-block;

    background-color: #000;

    position: absolute;
    bottom: 2px;
    left: -5px;
    right: -5px;
  }
`;
