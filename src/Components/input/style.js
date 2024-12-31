import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  width: 100%;
  padding: 0.4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  > input {
    font-family: "Roboto";
    border: none;
    border-color: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    width: 100%;
    height: 2rem;
    padding: 0.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 0.5rem;
      padding: 0.6rem;
      width: 100%;
    }
  }
`