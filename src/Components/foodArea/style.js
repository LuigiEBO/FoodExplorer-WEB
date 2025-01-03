import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  width: 14rem;
  height: 16rem;
  padding: 0.7rem;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  > h3 {
    font-weight: 500;
  }
  > span {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
  > img {
    height: 4rem;
    width: 4rem;
    align-self: center;
  }
  > div.amount {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 10rem;
    height: 12rem;
  }
`