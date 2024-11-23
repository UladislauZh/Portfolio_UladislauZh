import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type SkillPropsType = {
  iconId: string;
  title?: string;
  viewBox?: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <SkillStyled>
      <FlexWrapper align="center" direction="column">
        <IconWrapper>
          <Icon
            iconId={props.iconId}
            viewBox={props.viewBox || "0 0 120 120"}
          />
          <p>{props.title}</p>
        </IconWrapper>
      </FlexWrapper>
    </SkillStyled>
  );
};

const SkillStyled = styled.div`
  width: 120px;
  /* width: 33%; */
  /* display: flex;
  align-items: center;
  flex-direction: column; */
  margin: 0 55px;

  @media ${theme.media.tablet} {
    margin: 0 30px;
  }
`;

const IconWrapper = styled.div`
  transition: transform 0.5s ease;

  p {
    opacity: 0;
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-size: 20px;
    /* line-height: 300px; */
    text-align: center;
    /* margin: 30px 0 15px; */
    color: ${theme.colors.text};
    transition: 0.5s ease;
    text-transform: capitalize;
  }

  &:hover {
    transform: scale(1.2);
  }

  &:hover p {
    transform: scale(1.2);
    opacity: 1;
    color: ${theme.colors.basic};
    cursor: pointer;
  }
`;

// const SkillText = styled.p`
//   color: ${theme.colors.font};
//   font-family: "DM Sans", sans-serif;
//   font-weight: 500;
//   font-size: 20px;
//   text-align: center;
//   margin: 30px 0 15px;
// `;
