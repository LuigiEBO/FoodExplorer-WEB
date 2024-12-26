import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.button`
  font-family: "Roboto";
  width: 14rem;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: none;
  border-radius: 0.25rem;
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 0.5rem;
    width: 11.2rem;
    padding: 0.5rem;
  }
`