import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  display: none;
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    position: absolute;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    &[data-menu-on="true"] {
      display: block;
    }
    > div.interective {
      padding: 0 1.5rem;
    }
    h3, a {
      font-size: 1.3rem;
      font-family: "Poppins";
      font-weight: 300;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_300};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    > div.header {
      height: 80px;
      display: flex;
      font-size: 1.8rem;
      align-items: center;
      background-color: ${({ theme }) => theme.COLORS.DARK_600};
      width: 100%;
      padding: 1rem;
      > h2 {
        font-size: 1.2rem;
        font-family: "Roboto";
        font-weight: 400;
      }
    }
  }
`