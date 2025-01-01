import { Container } from "./style";
import logoFooter from "../../assets/logoFooter.svg"
export function Footer() {
  return (
    <Container>
      <div className="logo">
        <img src={logoFooter} alt="Logo" />
        <h4>food explorer</h4>
      </div>
      <div>
        <h4>© 2023 - Todos os direitos reservados.</h4>
      </div>
    </Container>
  )
}