import React from "react";
import { styled } from "styled-components";
import { SectionTitle } from "../../../components/sectionTittle/SectionTittle";
import { SectionText } from "../../../components/sectionTittle/SectionText";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <SectionText>Get in touch me</SectionText>
        <StyledForm>
          <Field placeholder="name" />
          <Field placeholder="mail" />
          <Field placeholder="message" as={"textarea"} />
          <Button type="submit">Send message</Button>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section``;
const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }
`;
const Field = styled.input`
  width: 100%;
  box-shadow: 2px 2px 100px 0px #00000033;
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;

  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;

  color: ${theme.colors.accent};

  &::placeholder {
    color: ${theme.colors.font};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`;
