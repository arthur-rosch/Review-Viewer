import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  margin-top: 0.5rem;
  text-align: center;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  p {
    margin-bottom: 1rem;
  }
`
export const ContainerInputBase = styled.label`
  width: 100%;
  height: 3rem;

  margin-bottom: 1rem;

  padding-left: 1rem;
  padding-right: 0.5rem;

  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;

  border-radius: 8px;
  border: 2px solid #8c9494;
`
export const InputStoreLink = styled(ContainerInputBase)``
export const InputSalesPage = styled(ContainerInputBase)``

export const Input = styled.input`
  width: 100%;

  border: 0;
  outline: none;
  font-size: 12px;

  color: white;
  background: transparent;
`
export const InputCheckBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 1rem;

  label {
    gap: 0.5rem;
    margin-right: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const InputReviewQuantity = styled.label`
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;

  div {
    width: 100%;
    margin-top: -1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    input {
      width: 100%;
    }
    p {
      width: 10%;
      height: 3rem;
      margin-left: 1rem;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1rem;
      border-radius: 8px;
      border: 2px solid #8c9494;
    }
  }
`

export const InputGenderDivision = styled.label`
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;

  div {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
  }

  input {
    width: 100%;
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  height: 3rem;
  margin-top: 1rem;

  border: 0;
  outline: none;
  border-radius: 8px;
`
