import {Container, Logo, InputArea} from './style'
import explorerImg from "../../assets/Polygon.svg"
import { Input } from '../../Components/input'
import { Button } from '../../Components/button'
import { Link } from 'react-router-dom'
export function SignIn () {
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
          <Input placeholder="exemplo@gmail.com" />
        </div>
        <div>
          <span>Senha</span>
          <Input placeholder="No mínimo 6 caracteres" />
        </div>
        <Button title="Entrar"></Button>
        <Link to="/register"> Crie uma Conta</Link>
      </InputArea>
    </Container>
  )
}