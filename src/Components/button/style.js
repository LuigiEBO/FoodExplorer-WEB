import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.button`
  font-family: "Roboto";
  width: 100%;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: none;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 0.5rem;
    width: 100%;
    padding: 0.5rem;
  }
`