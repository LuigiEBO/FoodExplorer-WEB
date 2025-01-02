import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins";
  > div.main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    div.back {
      display: flex;
      align-items: center;

      svg {
        font-size: 2rem;
      }
    }
    div.input-area {
      div.input-wrapper {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
      }
      input#foodImg {
        display: none;
      }
      p {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }
      label {
        font-family: "Roboto";
        border: none;
        border-color: none;
        width: 100%;
        padding: 1rem;
        border-radius: 0.6rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_1000};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
          width: 100%;
        }
      }
      select {
        font-family: "Roboto";
        border: none;
        border-color: none;
        width: 100%;
        font-weight: 300;
        padding: 1rem;
        border-radius: 0.6rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
          width: 100%;
        }
      }
      div.buttons {
        display: flex;
        gap: 2rem;
        button {
          font-family: "Roboto";
          width: 100%;
          padding: 0.8rem;
          background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
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
        }
        button.delete {
          font-family: "Roboto";
          width: 100%;
          padding: 0.8rem;
          background-color: ${({ theme }) => theme.COLORS.DARK_800};
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
        }
      }
    }
  }
`