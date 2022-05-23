import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { TextField, Alert } from '@mui/material'

import { PasswordInput } from '@/components/Inputs/PasswordInput'
import { CommonButton } from '@/components/Buttons/CommonButton'
import { validateEmail } from '@/utils/inputValidators'
import { If } from '@/components/If'
import { useAuth } from '@/hooks/useAuth'

import * as Styled from './Login.styles'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)

  const [showAlert, setShowAlert] = useState(false)

  const navigate = useNavigate()

  const { signIn, isLoggedIn } = useAuth()

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handleValidation() {
    const emailValidation = validateEmail(email)
    const passwordValidation = password?.length > 0

    if (
      emailValidation &&
      passwordValidation &&
      email.length > 0 &&
      password.length > 0
    ) {
      signIn(email, password)
    }

    setShowAlert(!emailValidation || !passwordValidation)
    setIsEmailValid(emailValidation)
    setIsPasswordValid(passwordValidation)
  }

  function handleSubmit(e) {
    if (e.keyCode === 13 || e._reactName === 'onClick') {
      handleValidation()
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/reviews')
    }
  }, [''])

  return (
    <Styled.Container>
      <Styled.ContentWrapper>
        <Styled.Title>Bem vindo</Styled.Title>
        <Styled.Description>
          Informe email e senha para acessar à plataforma
        </Styled.Description>
      </Styled.ContentWrapper>
      <Styled.Form>
        <Styled.InputWrapper>
          <TextField
            onKeyDown={handleSubmit}
            label="Email"
            name="email"
            color={'primary'}
            variant="outlined"
            error={!isEmailValid}
            onChange={handleEmail}
            value={email}
            fullWidth
          />
          <PasswordInput
            label="Senha"
            name="password"
            onChange={setPassword}
            onKeyDown={handleSubmit}
            error={!isPasswordValid}
          />
          <Styled.HelpText>Esqueceu sua senha?</Styled.HelpText>
        </Styled.InputWrapper>
        <CommonButton onClick={handleSubmit} name="login-button">
          Entrar
        </CommonButton>
      </Styled.Form>
      <Styled.AlertBox>
        <If condition={showAlert}>
          <Alert severity="error">
            {!isEmailValid && 'Utilize um endereço de email válido. \n'}
            {!isPasswordValid && 'Preencha o campo senha.'}
          </Alert>
        </If>
      </Styled.AlertBox>
    </Styled.Container>
  )
}
