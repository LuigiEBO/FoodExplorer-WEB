import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  font-family: "Poppins";
  > div.main {
    padding: 4rem;
    >div {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      margin-bottom: 3rem;
      >svg {
        font-size: 2rem;
      }
    }
    > div.info {
      display: flex;
      gap: 3rem;
      >div.text {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        h1 {
          font-weight: 500;
        }
        p {
          font-weight: 300;
          font-size: 1rem;
        }
      }
      > img {
        width: 20rem;
        height: 20rem;
      }
      div.ask-food {
        display: flex;
        align-items: center;
        max-width: 25rem;
        gap: 0.6rem;
        > svg {
          font-size: 3rem;
          cursor: pointer;
        }
        > span {
          font-size: 1.5rem;
        }
      }
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div.main {
      padding: 0;
      margin-bottom: 1rem;
      > div {
        > svg {
          font-size: 1rem;
        }
        gap: 0.4rem;
        display: flex;
        align-items: center;
        font-size: 0.6rem;
        margin-top: 1rem;
      }
      div.info {
        text-align: center;
        display: flex;
        gap: 0.6rem;
        flex-direction: column;
        align-items: center;
        img.pratoImg {
          width: 15rem;
          height: 15rem;
        }
        h1 {
          font-size: 1.6rem;
          font-weight: 500;
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
        p {
          font-size: 0.8rem;
          max-width: 15rem;
          font-weight: 300;
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
        div.ask-food {
          display: flex;
          align-items: center;
          width: 16rem;
          gap: 0.6rem;
          > svg {
            font-size: 3rem;
          }
          > span {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`