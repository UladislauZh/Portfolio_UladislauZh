import React from "react";
import { styled } from "styled-components";
import { SectionTitle } from "../../../components/sectionTittle/SectionTittle";
import { SectionText } from "../../../components/sectionTittle/SectionText";
import { Button } from "../../../components/Button";

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact</SectionTitle>
      <SectionText>Get in touch me</SectionText>
      <StyledForm>
        <Field placeholder="name" />
        <Field placeholder="mail" />
        <Field placeholder="message" as={"textarea"} />
        <Button type="submit">Send message</Button>
      </StyledForm>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: #eeffea;
`;
const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`;
const Field = styled.input``;
