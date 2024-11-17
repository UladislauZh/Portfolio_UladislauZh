import React from "react";
import { styled } from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction="column" align="center">
        <Name>Uladislau</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                height={"30px"}
                width={"30px"}
                viewBox={"0 0 30px 30px"}
                iconId="githubLinkVector"
              ></Icon>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height={"30px"}
                width={"30px"}
                viewBox={"0 0 30px 30px"}
                iconId="linkedinLinkVector"
              ></Icon>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                height={"30px"}
                width={"30px"}
                viewBox={"0 0 30px 30px"}
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
  min-height: 20vh;
`;

const Name = styled.span``;

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const Copyright = styled.small``;
