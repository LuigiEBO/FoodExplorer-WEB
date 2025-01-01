import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 2rem;
  > div.logo {
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    font-family: "Roboto";
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
  > div {
    display: flex;
    font-size: 1rem;
    font-family: "DM Sans";
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    position: sticky;
    > div {
      font-size: 0.5rem;
    }
    > div.logo {
      font-size: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.2rem;
    }
  }
`