import { styled } from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

export const SectionTitle = styled.h2`
  ${font({ weight: 700, Fmax: 48, Fmin: 36 })}

  color: ${theme.colors.accent};
  text-align: center;

  margin-bottom: 50px;
`;
