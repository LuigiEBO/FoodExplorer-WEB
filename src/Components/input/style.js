import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  > input {
    font-family: "Roboto";
    border: none;
    border-radius: 0.4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    width: 14rem;
    padding: 0.7rem;
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 0.5rem;
      padding: 0.6rem;
      width: 11.2rem;
    }
  }
`