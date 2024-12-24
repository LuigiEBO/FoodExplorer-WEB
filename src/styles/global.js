import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakPoints";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    -webkit-font-smoothing: antialiased;
    @media(max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 0.5rem;
    }
  }
  a {
    text-decoration: none;
  }
  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }
  button:hover, a:hover {
    filter: brightness(0.9);
  }
`