import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"
export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 10rem;
  margin-right: 0.3rem;
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT_600};

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_100}` : "none"};

  border-radius: 0.6rem;
  padding-right: 1rem;

  > button {
    max-width: 5rem;
  }
  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: none;
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    height: 2rem;
    max-width: 7rem;

    padding: 0.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGH_100};
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width:4rem;
    padding-right: 0rem;
    > input {
      height: 2rem;
      max-width: 3rem;
      font-size: 0.3rem;
    }
    > button {
      font-size: 0.5rem;
    }
  }
`
