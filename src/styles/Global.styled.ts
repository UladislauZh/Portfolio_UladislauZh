import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
*, 
*::before,
*::after{
margin:0;
padding: 0;
box-sizing: border-box;
}
body {
  margin: 0;
  font-family: "Poppins", "DM Sans", "-apple-system", "BlinkMacSystemFont", 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.2;
}

a{
  text-decoration:none;
}

ul{
  list-style: none;
}

button{
background-color: unset;
border: none;
cursor: pointer;
color: ${theme.colors.accent};

}

section{
  padding: 100px 0;
  /* max-width: 1230px;
  margin: 0 auto; */
}
`;
