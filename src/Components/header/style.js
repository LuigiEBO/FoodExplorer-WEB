import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  display: flex;
  align-items: center;
  font-family: "Roboto";
  gap: 2rem;
  padding: 0 3rem;
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
  > button.menu-mobile {
    display: none;
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: flex;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background: none;
      border: none;
      svg {
        font-size: 1.8rem;
      }
    }
  }
  div {
    display: flex;
    align-items: center;
  }
  > div img {
    width: 2rem;
  }
  > div h2 {
    font-size: 1.5rem;
    width: 10rem;
  }
  > div.input {
    width: 100%;
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: none;
    }
  }
  > button {
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: none;
    }
  }
  > img {
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: none;
    }
  }

  > img.carrinho {
    display: none;
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: flex;
    }
  }
`