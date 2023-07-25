import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Button = styled(Link)`
  width: 50%;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border: 2px solid #616368;

  color: #616368;
  background: rgb(36, 39, 44);
  background: linear-gradient(
    58deg,
    rgba(36, 39, 44, 0.804359243697479) 60%,
    rgba(207, 208, 209, 0.0984768907563025) 100%
  );
`
