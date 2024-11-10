import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
  iconId: string;
  title?: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <SkillStyled>
      <Icon iconId={props.iconId} />
      <SkillText>{props.title}</SkillText>
    </SkillStyled>
  );
};

const SkillStyled = styled.div`
  width: 15%;
  background-color: #cccccc;
  margin: 10px;
`;

const SkillText = styled.p`
  color: blue;
`;
