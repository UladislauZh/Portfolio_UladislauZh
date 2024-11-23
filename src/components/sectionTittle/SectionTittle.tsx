import { styled } from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

type SectionTittlePropsType = {
  bottom?: string;
};

export const SectionTitle = styled.h2<SectionTittlePropsType>`
  ${font({ weight: 700, Fmax: 48, Fmin: 36 })}

  color: ${theme.colors.basic};
  text-align: center;

  margin-bottom: ${(props) => props.bottom || "50px"};
`;
