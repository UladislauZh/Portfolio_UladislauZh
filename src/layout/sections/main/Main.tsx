import React from "react";
import photo from "../../../assets/images/rastr/photo_portfolio.webp";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { PhotoAbstract } from "../../../components/PhotoAbstract";
import { Container } from "../../../components/Container";
import photoAbstractVector from "../../../../src/assets/images/vector/abstractVector.svg";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between "}>
          <div>
            <MainTitle>Hi 👋,</MainTitle>
            <Name>I am Uladislau Zhuhar</Name>
            <MainTitle>I build things for web</MainTitle>
          </div>
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
  background-color: #fff5e7;
  display: flex;
`;

const Photo = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
`;

const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 58px;
  line-height: 70px;
  letter-spacing: -0.02em;
  color: #42446e;
  text-align: left;
`;

const Name = styled.span`
  font-weight: 700;
  font-size: 58px;
  line-height: 70px;
  letter-spacing: -0.02em;
  /* color: transparent; */
  color: linear-gradient(250deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
  text-align: left;
`;
/* <br /> */

// const Abstract = styled.div`
//   background-image: url(${photoAbstractVector});
// `;
