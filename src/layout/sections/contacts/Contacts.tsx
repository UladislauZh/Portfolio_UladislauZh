import React from "react";
import { styled } from "styled-components";
import { SectionTitle } from "../../../components/sectionTittle/SectionTittle";
import { SectionText } from "../../../components/sectionTittle/SectionText";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";

export const Contacts = () => {
  return (
    <StyledContacts id="Contacts">
      <Container>
        <SectionTitle bottom="110px">Contact</SectionTitle>
        <FlexWrapper wrap="wrap" gap="20px">
          <StyledForm>
            <SectionText bottom="20px">Get in touch me</SectionText>
            <Field placeholder="You Name" required />
            <Field placeholder="You Mail" required type="email" />
            <Field placeholder="You Message" required as={"textarea"} />
            <Button type="submit">Send message</Button>
          </StyledForm>
          <MyContacts>
            <Contact href="tel:89214369464">
              <Icon iconId="Phone" width="32" height="32" viewBox="0 0 32 32" />
              <p>Tel: 89214369464</p>
            </Contact>
            <Contact href="tel:+375298290149">
              <Icon
                iconId={"Phone"}
                width="32"
                height="32"
                viewBox="0 0 32 32"
              />
              <p>Tel: +375298290149</p>
            </Contact>
            <Contact href="mailto:uladislau.zh@gmail.com">
              <Icon iconId="Email" width="32" height="32" viewBox="0 0 32 32" />
              <p>Email: uladislau.zh@gmail.com</p>
            </Contact>
          </MyContacts>
        </FlexWrapper>
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
  box-shadow: 2px 2px 100px 0 rgba(54, 54, 54, 0.2);
  /* box-shadow: 2px 2px 100px 0px #00000033; */
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;
  border-radius: 5px;
  background-color: ${theme.colors.bgc};

  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;

  color: ${theme.colors.basic};

  &::placeholder {
    color: ${theme.colors.font};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
    border: 2px solid transparent;
    background: linear-gradient(#363636, #363636) padding-box,
      linear-gradient(180deg, #e70faa 0%, #00c0fd 100%) border-box;
  }
`;

const MyContacts = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 20px;
`;

const Contact = styled.a`
  color: ${theme.colors.basic};
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.5s ease;

  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 144%;
  }

  &:hover {
    &:hover {
      transform: scale(1.1);
    }
  }
`;
