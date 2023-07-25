import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Button = styled(Link)`
  width: 50%;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 100%;
    height: 100%;

    border-radius: 8px;
    border: 2px solid #fff;

    &:not(disabled) {
      cursor: pointer;

      &:hover {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      }
    }

    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
      border: 2px solid;
    }
  }
`
