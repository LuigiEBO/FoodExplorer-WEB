import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 10rem;
  text-align: center;
  font-size: 0.8rem;
  padding: 0.4rem 0.9rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`
