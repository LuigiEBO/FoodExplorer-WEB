import { Container } from "./style";
import { FiX, FiSearch } from "react-icons/fi";
import {Input} from "../input"
import { Footer } from "../footer";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
export function MenuMobileAdmin({menuIsOn, onMenuIsOff, input}) {
  const { Logout } = useAuth()
  return (
    <Container data-menu-on={menuIsOn}>
      <div className="header">
        <FiX onClick={onMenuIsOff} />
        <h2>Menu</h2>
      </div>
      <div className="interective">
        {input}
        <Link to="/novoprato">
          <h3>Novo Prato</h3>
        </Link>
        <h3 onClick={Logout}>Sair</h3>
      </div>
    </Container>
  )
}