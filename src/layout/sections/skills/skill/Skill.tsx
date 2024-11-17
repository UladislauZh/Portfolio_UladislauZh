import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type SkillPropsType = {
  iconId: string;
  title?: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <SkillStyled>
      <FlexWrapper align="center" direction="column">
        <IconWrapper>
          <Icon iconId={props.iconId} />
        </IconWrapper>
        {/* <SkillText>{props.title}</SkillText> */}
      </FlexWrapper>
    </SkillStyled>
  );
};

const SkillStyled = styled.div`
  width: 120px;

  /* display: flex;
  align-items: center;
  flex-direction: column; */
`;

const IconWrapper = styled.div`
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const SkillText = styled.p`
  color: ${theme.colors.font};
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 20px;
  text-align: center;

  margin: 30px 0 15px;
`;
