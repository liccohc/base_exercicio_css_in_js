import { FormEvent, useState } from 'react'
import styled from 'styled-components'

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${({ theme }) => theme.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

const InputStyled = styled.input`
  padding: 0 16px;
  outline-color: ${({ theme }) => theme.corPrincipal};
`

const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.corPrincipal};
  border: 1px solid ${({ theme }) => theme.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormStyled onSubmit={aoEnviarForm}>
      <InputStyled
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <ButtonStyled type="submit">Pesquisar</ButtonStyled>
    </FormStyled>
  )
}

export default FormVagas
