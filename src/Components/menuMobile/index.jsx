import { Container } from "./style";
import { FiX, FiSearch } from "react-icons/fi";
import {Input} from "../input"
import { Footer } from "../footer";
import { useAuth } from "../../hooks/auth";
export function MenuMobile({menuIsOn, onMenuIsOff, input}) {
  const {Logout} = useAuth()
  return (
    <Container data-menu-on={menuIsOn}>
      <div className="header">
        <FiX onClick={onMenuIsOff} />
        <h2>Menu</h2>
      </div>
      <div className="interective">
        {input}

        <h3 onClick={Logout}>Sair</h3>
      </div>
    </Container>
  )
}