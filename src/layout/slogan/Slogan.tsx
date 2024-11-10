import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTittle/SectionTittle";
import { Button } from "../../components/Button";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <SectionTitle>Working for my Wife's basket on WB </SectionTitle>
      <Button>Hire me</Button>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: #e2fcf3;
`;
