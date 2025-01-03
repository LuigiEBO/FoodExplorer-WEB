import { Container } from "./style";
import { FiX, FiSearch } from "react-icons/fi";
import {Input} from "../input"
import { Footer } from "../footer";
import { Link } from "react-router-dom";
export function MenuMobileAdmin({menuIsOn, onMenuIsOff}) {
  return (
    <Container data-menu-on={menuIsOn}>
      <div className="header">
        <FiX onClick={onMenuIsOff} />
        <h2>Menu</h2>
      </div>
      <div className="interective">
        <Input
          icon={FiSearch}
          placeholder="Busque por pratos ou ingredientes"
        />
        <Link to="/novoprato">
          <h3>Novo Prato</h3>
        </Link>
        <h3>Sair</h3>
      </div>
    </Container>
  )
}