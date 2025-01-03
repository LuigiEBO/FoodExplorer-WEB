import { useState } from 'react'
import {Container, Logo, InputArea} from './style'
import explorerImg from "../../assets/Polygon.svg"
import { Input } from '../../Components/input'
import { Button } from '../../Components/button'
import { Link } from 'react-router-dom'
import {api} from "../../services/api"
export function SignUp () {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos")
    }

    api.post("/users", {name, email, password}).then(() => {alert("usuário cadastrado")}).catch(() => {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar")
      }
    })
  }
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
          <Input
            placeholder="exemplo@gmail.com"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <span>Email</span>
          <Input
            placeholder="exemplo@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <span>Senha</span>
          <Input
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button title="Cadastrar" onClick={handleSignUp}/>
        <Link to="/">Já tenho uma conta</Link>
      </InputArea>
    </Container>
  )
}