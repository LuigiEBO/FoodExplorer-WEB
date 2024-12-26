import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  font-family: "Roboto";
  display: flex;
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;
    gap: 1.2rem;
  }
  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
export const Logo = styled.div`
  display: flex;
  height: 3rem;
  margin: auto ;
  > img {
    width: 4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    align-items: center;
    height: 2rem;
    font-size: 0.8rem;
    margin-bottom: 2rem;
    > img {
      width: 2rem;
    }
    margin: 0 0;
  }
`
export const InputArea = styled.div`
  font-family: "Roboto";
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  border-radius: 0.5rem;
  padding: 2rem 4rem;
  margin: auto;
  gap: 2rem;
  > a,
  h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins";
    font-weight: 500;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: 1rem;
    margin: 0;
    margin-bottom: 1rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    > h1 {
      display: none;
    }
  }
`