import styled from 'styled-components'

export const Container = styled.main`
  padding: 1rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;

  border-radius: 6px;
  border: 2px solid #616368;

  background: rgb(36, 39, 44);
  background: linear-gradient(
    58deg,
    rgba(36, 39, 44, 0.804359243697479) 60%,
    rgba(207, 208, 209, 0.0984768907563025) 100%
  );
`

export const ContainerPlatform = styled.div`
  width: 100%;
  margin-top: 1rem;

  display: grid;
  align-items: center;
  justify-content: center;

  /* grid-area: 10px; */
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
`
