import styled from 'styled-components'

export const Container = styled.main`
  padding: 1rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;

  border-radius: 6px;
  border: 2px solid ${(props) => props.theme.borderColor};
`
export const ContainerPlatform = styled.div`
  width: 100%;
  margin-top: 1rem;

  display: grid;
  align-items: center;
  justify-content: center;

  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
`
export const ContainerButton = styled.div`
  gap: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: end;
`
