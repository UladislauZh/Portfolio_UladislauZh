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
            <MainTitle>
              Hi 👋,
              <br /> I am <Name>Uladislau Zhuhar</Name>
              <br />I build things for web
            </MainTitle>
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

  /* border-image-slice: 9; */
`;

const MainTitle = styled.h1`
  font-size: 58px;
  letter-spacing: -0.02em;
  color: #42446e;
  text-align: left;
`;

const Name = styled.span`
  font-weight: 700;
  font-size: 58px;
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
