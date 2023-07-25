import styled from 'styled-components'

export const Container = styled.main`
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  border-radius: 6px;
  border: 2px solid #616368;

  background: rgb(36, 39, 44);
  background: linear-gradient(
    58deg,
    rgba(36, 39, 44, 0.804359243697479) 60%,
    rgba(207, 208, 209, 0.0984768907563025) 100%
  );
`
export const Header = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContainerStar = styled.div`
  p {
    color: #616361;
    font-size: 12px;
  }
`

export const Star = styled.div`
  width: 100%;

  display: flex;
  align-items: start;
  justify-content: start;
`

export const MediaStar = styled.p`
  margin-left: 1rem;
  padding: 0.2rem 0.7rem 0.2rem 0.7rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  border-radius: 8px;
  border: 2px solid #8c9494;

  color: #fff;
  background: rgb(36, 39, 44);
  background: linear-gradient(
    58deg,
    rgba(36, 39, 44, 0.804359243697479) 60%,
    rgba(207, 208, 209, 0.0984768907563025) 100%
  );
`

export const ContainerButtons = styled.div`
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  button {
    padding: 0.3rem;
    margin-left: 0.5rem;

    font-size: 0.8rem;

    border: 0;
    outline: none;
    border-radius: 8px;

    color: #616365;
    background: rgba(207, 208, 209, 0.0984768907563025);
  }
`
