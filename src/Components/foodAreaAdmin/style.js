import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
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
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
  > img {
    height: 6rem;
    width: 6rem;
    align-self: center;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 10rem;
    height: 12rem;
  }
`