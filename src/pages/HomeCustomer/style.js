import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > div.home {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem;
    font-family: "Poppins";
    > h2 {
      font-weight: 500;
    }
    > div.home-decoration {
      font-family: "Poppins";
      border-radius: 0.2rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      display: flex;
      align-items: end;
      justify-content: center;
      height: 15rem;
      > img {
        height: 18rem;
        width: 30rem;
      }
      > div.text {
        padding-bottom: 4rem;
        > h2 {
          font-weight: 500;
        }
        > p {
          font-weight: 300;
        }
      }
    }
    > div.scroll-foods {
      display: flex;
      max-width: 100%;
      gap: 0.4rem;
      overflow: scroll;
      overflow-y: none;
    }
    > div.scroll-foods ::-webkit-scrollbar {
      background-color: ${({ theme }) => theme.COLORS.DARK_400};
      color: ${({ theme }) => theme.COLORS.DARK_1000};
    }
    > div.scroll-foods ::-webkit-scrollbar-corner {
      display: none;
    }
    > div.scroll-foods ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      border-radius: 1rem;
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    > div.home {
      padding: 3rem 0.6rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      > h2 {
        font-size: 1rem;
        font-weight: 300;
      }
      > div.home-decoration {
        font-family: "Poppins";
        display: flex;
        align-items: end;
        justify-content: space-between;
        width: 19rem;
        height: 6rem;
        align-self: center;
        > img {
          height: 8rem;
          width: 10rem;
        }
        > div.text {
          padding-bottom: 1rem;
          > h2 {
            font-size: 0.8rem;
            font-weight: 500;
          }
          p {
            font-size: 0.6rem;
            font-weight: 300;
          }
        }
      }
      > div.scroll-foods {
        display: flex;
        max-width: 100%;
        justify-content: space-between;
        gap: 0.4rem;
        overflow: scroll;
      }
    }
  }
`