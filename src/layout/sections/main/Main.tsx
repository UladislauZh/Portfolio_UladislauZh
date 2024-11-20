import React from "react";
import photo from "../../../assets/images/rastr/photo_portfolio.webp";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { PhotoAbstract } from "../../../components/PhotoAbstract";
import { Container } from "../../../components/Container";
import photoAbstractVector from "../../../../src/assets/images/vector/abstractVector.svg";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around "} wrap="wrap">
          <MainTitleContainer>
            <MainTitle>
              Hi 👋,
              <br /> I am <Name>Uladislau Zhyhar</Name>
              <br />I build things for web
            </MainTitle>
          </MainTitleContainer>
          {/* <Abstract> */}
          <Photo src={photo} alt="" />
          {/* </Abstract> */}
          {/* <PhotoAbstract iconId="photoAbstractVector" /> */}
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  display: flex;
`;

const Photo = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  border: 9px solid transparent;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(180deg, #e70faa 0%, #00c0fd 100%) border-box;
  border-radius: 50%;

  @media ${theme.media.mobile} {
    width: 300px;
    height: 300px;
  }

  /* border-image-slice: 9; */
`;

const MainTitleContainer = styled.div`
  /* max-width: 670px; */
`;

const MainTitle = styled.h1`
  ${font({ weight: 700, Fmax: 58, Fmin: 36 })}

  /* font-size: 58px; */
  letter-spacing: -0.02em;
  text-align: left;

  @media ${theme.media.mobile} {
    margin-top: 50px;
  }
`;

const Name = styled.span`
  ${font({ weight: 700, Fmax: 58, Fmin: 36 })}

  white-space: nowrap;

  /* font-weight: 700;
  font-size: 58px; */
  letter-spacing: -0.02em;
  /* color: transparent; */
  /* color: linear-gradient(250deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%); */
  background-image: linear-gradient(90deg, #83caeb 0%, #b380ee 100%);
  background-clip: text;
  color: transparent;
  text-align: left;
`;
/* <br /> */

// const Abstract = styled.div`
//   background-image: url(${photoAbstractVector});
// `;
