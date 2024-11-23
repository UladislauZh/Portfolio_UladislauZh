import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/Theme";

export const Social = () => {
  return (
    <SocialsLinks>
      <FlexWrapper align="center" gap="20px" height="50px">
        <SocialLink href="https://github.com/UladislauZh">
          <Icon
            iconId={"githubLinkVector"}
            width="32"
            height="32"
            viewBox="0 0 30 30"
          />
        </SocialLink>
        <SocialLink href="https://t.me/zhigarius">
          <Icon
            iconId={"Telegram"}
            width="32"
            height="32"
            viewBox="0 0 32 32"
          />
        </SocialLink>
        <SocialLink href="https://vk.com/v.zhigar">
          <Icon iconId={"Vk"} width="32" height="32" viewBox="0 0 32 32" />
        </SocialLink>
      </FlexWrapper>
    </SocialsLinks>
  );
};

const SocialsLinks = styled.div`
  @media ${theme.media.mobile} {
    padding-right: 60px;
  }
`;

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
