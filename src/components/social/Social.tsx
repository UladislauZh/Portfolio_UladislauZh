import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";

export const Social = () => {
  return (
    <FlexWrapper gap="20px">
      <a href="">
        <Icon
          iconId={"githubLinkVector"}
          width="30"
          height="30"
          viewBox="0 0 30 30"
        />
      </a>
      <a href="">
        <Icon
          iconId={"x(twitter)LinkVector"}
          width="31"
          height="31"
          viewBox="0 0 31 31"
        />
      </a>
      <a href="">
        <Icon
          iconId={"linkedinLinkVector"}
          width="30"
          height="30"
          viewBox="0 0 30 30"
        />
      </a>
    </FlexWrapper>
  );
};
