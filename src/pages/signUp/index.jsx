import {Container, Logo, InputArea} from './style'
import explorerImg from "../../assets/Polygon.svg"
import { Input } from '../../Components/input'
import { Button } from '../../Components/button'
import { Link } from 'react-router-dom'
export function SignUp () {
  return (
    <Container>
      <Logo>
        <img src={explorerImg} alt="" />
        <h1>Food Explorer</h1>
      </Logo>
      <InputArea>
        <h1>Crie sua Conta</h1>
        <div>
          <span>Nome</span>
          <Input placeholder="exemplo@gmail.com" />
        </div>
        <div>
          <span>Email</span>
          <Input placeholder="exemplo@gmail.com" />
        </div>
        <div>
          <span>Senha</span>
          <Input placeholder="No mínimo 6 caracteres" />
        </div>
        <Button title="Entrar"></Button>
        <Link to="/">Já tenho uma conta</Link>
      </InputArea>
    </Container>
  )
}