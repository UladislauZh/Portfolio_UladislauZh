import React from "react";
import { styled } from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction="column" align="center">
        <Name>Uladislau</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                height={"30"}
                width={"30"}
                viewBox={"0 0 30 30"}
                iconId="githubLinkVector"
              ></Icon>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height={"30"}
                width={"30"}
                viewBox={"0 0 30 30"}
                iconId="linkedinLinkVector"
              ></Icon>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height={"31"}
                width={"31"}
                viewBox={"0 0 31 31"}
                iconId="x(twitter)LinkVector"
              ></Icon>
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2023 Uladislau Zhyhar, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 40px 0;
`;

const Name = styled.span`
  font-family: "DM Sans", sans-serif;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 1px;
  color: ${theme.colors.accent};
`;

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.font};

  &:hover {
    color: ${theme.colors.accent};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: ${theme.colors.font};
`;
