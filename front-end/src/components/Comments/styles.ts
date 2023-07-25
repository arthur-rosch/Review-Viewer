import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;

  display: flex;
  align-items: start;
  justify-content: center;

  border-radius: 8px;

  background: #292b30;

  button {
    padding: 0 0.5rem 0 0.5rem;

    top: 4rem;
    right: 0rem;
    position: absolute;

    border: 0;
    outline: 0;

    background: transparent;
  }
`

export const Comment = styled.div`
  width: 50%;

  h2 {
    font-size: 14px;
  }
  p {
    font-size: 10px;
  }
`

export const ContainerPhotos = styled.div`
  width: 50%;
  margin-left: 0.5rem;

  overflow-x: auto;
  white-space: nowrap;

  ::-webkit-scrollbar {
    width: 15px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #292b36;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export const Slider = styled.div`
  gap: 1rem;
  width: 8rem;
  height: 6rem;
  display: inline-block;
  margin-right: 1rem; /* Espaço entre as fotos */
  vertical-align: top;

  img {
    width: 100%;
    height: 5rem;
    margin-right: 1rem;

    object-fit: cover;
    border-radius: 8px;
  }
`
