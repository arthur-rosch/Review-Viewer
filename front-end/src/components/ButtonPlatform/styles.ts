import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  label {
    width: 4rem;
    text-align: center;

    border: 2px solid transparent;

    &:hover {
      cursor: pointer;
    }
    [type='radio'] {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* IMAGE STYLES */
    [type='radio'] + img {
      width: 4rem;
      cursor: pointer;
      border-radius: 6px;
    }

    /* CHECKED STYLES */
    [type='radio']:checked + img {
      outline: 3px solid #616368;
    }

    p {
      font-size: 10px;
    }
  }
`
