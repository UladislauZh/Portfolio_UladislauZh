import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { Icon } from "../../../../components/icon/Icon";
import { font } from "../../../../styles/Common";

// const projectItems = ["HTML", "JavaScript", "SASS", "React"];

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
      </ImageWrapper>
      <Description>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>

        <TechStack>Tech stack : HTML , JavaScript, SASS, React</TechStack>
        <SectionLinks>
          <SectionLink>
            <Link href={"https://github.com/UladislauZh"}>
              <Icon
                iconId={"linkVector"}
                width="18"
                height="18"
                viewBox="0 0 18 18"
              />
              <p>Live Preview</p>
            </Link>
          </SectionLink>
          <SectionLink>
            <Link href={"https://github.com/UladislauZh"}>
              <Icon
                iconId={"ghBlack"}
                width="20"
                height="20"
                viewBox="0 0 20 20"
              />
              <p>View Code</p>
            </Link>
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

  box-shadow: 2px 2px 10px 20px rgba(54, 54, 54, 0.2);
`;

const ImageWrapper = styled.div`
  border-radius: 20px 20px 0 0;
  height: 260px;
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
  /* margin-bottom: 25px; */

  /* @media ${theme.media.mobile} {
    width: 80%;
  } */
`;

const Description = styled.div`
  border-radius: 0 0 20px 20px;
  background-color: ${theme.colors.bgc};
  display: flex;
  flex-direction: column;
  padding: 25px 35px 25px 30px;
`;

const Title = styled.h4`
  ${font({ weight: 500, Fmax: 27, Fmin: 23 })}
  /* font-weight: 500;
  font-size: 28px; */
  text-align: center;
  color: ${theme.colors.basic};
  margin-bottom: 15px;
`;

const Text = styled.p`
  ${font({ weight: 300, Fmax: 18, Fmin: 14 })}
  max-width: 315px;
  /* font-weight: 300;
  font-size: 18px; */
  line-height: 144%;
  color: ${theme.colors.basic};
  text-align: left;
`;

const TechStack = styled.p`
  ${font({ weight: 300, Fmax: 14, Fmin: 12 })}
  /* font-weight: 300;
  font-size: 14px; */
  line-height: 162%;
  color: ${theme.colors.basic};
  margin: 12px 0 20px 0;
`;

const SectionLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SectionLink = styled.div`
  position: relative;
`;

const Link = styled.a`
  display: flex;
  gap: 10px;
  color: #fff;
  /* text-decoration-line: underline; */
  & + & {
    margin-left: 10px;
  }

  &:hover {
    &::before {
      height: 2px;
    }
  }

  &::before {
    content: "";
    display: inline-block;

    background: linear-gradient(90deg, #e70faa 0%, #00c0fd 100%) border-box;

    position: absolute;
    bottom: 1px;
    left: 25px;
    right: -3px;
  }
`;
