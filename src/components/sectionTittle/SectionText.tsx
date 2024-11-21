import { styled } from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

export const SectionText = styled.h3`
  ${font({ weight: 400, Fmax: 32, Fmin: 28 })}

  color: ${theme.colors.font};
  text-align: center;

  margin-bottom: 110px;
`;
