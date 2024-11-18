import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/Theme";

export const Social = () => {
  return (
    <FlexWrapper gap="20px">
      <SocialLink href="">
        <Icon
          iconId={"githubLinkVector"}
          width="30"
          height="30"
          viewBox="0 0 30 30"
        />
      </SocialLink>
      <SocialLink href="">
        <Icon
          iconId={"x(twitter)LinkVector"}
          width="31"
          height="31"
          viewBox="0 0 31 31"
        />
      </SocialLink>
      <SocialLink href="">
        <Icon
          iconId={"linkedinLinkVector"}
          width="30"
          height="30"
          viewBox="0 0 30 30"
        />
      </SocialLink>
    </FlexWrapper>
  );
};

const SocialLink = styled.a`
  color: ${theme.colors.font};
`;
