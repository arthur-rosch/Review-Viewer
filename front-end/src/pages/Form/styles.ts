import styled from 'styled-components'

export const Container = styled.main`
  padding: 1rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  border-radius: 6px;
  border: 2px solid ${(props) => props.theme.borderColor};

  label {
    color: #8c9494;
    font-size: 12px;
  }
`
export const Header = styled.header`
  width: 80%;
  gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      display: flex;
      align-items: center;
      justify-content: center;

      border: 0;
      background: transparent;
    }
    p {
      font-size: 1rem;
    }
  }
`
