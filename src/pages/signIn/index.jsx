import { useState } from 'react'
import {Container, Logo, InputArea} from './style'
import explorerImg from "../../assets/Polygon.svg"
import { Input } from '../../Components/input'
import { Button } from '../../Components/button'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
export function SignIn () {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const {SignIn} = useAuth()

  function handleSignIn() {
    SignIn({email, password})
  }
  return (
    <Container>
      <Logo>
        <img src={explorerImg} alt="Logo Explorer" />
        <h1>Food Explorer</h1>
      </Logo>
      <InputArea>
        <h1>Faça Login</h1>
        <div>
          <span>Email</span>
          <Input
            placeholder="exemplo@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div>
          <span>Senha</span>
          <Input
            placeholder="No mínimo 6 caracteres"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <Button title="Entrar" onClick={handleSignIn}></Button>
        <Link to="/register"> Crie uma Conta</Link>
      </InputArea>
    </Container>
  )
}