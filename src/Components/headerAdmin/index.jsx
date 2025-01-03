import { Container } from "./style";
import explorerImg from "../../assets/Polygon.svg"
import receiptSvg from "../../assets/Receipt.svg"
import {Input} from "../input/index"
import {Button} from "../button"
import {FiSearch, FiMenu} from "react-icons/fi"
import sairSvg from "../../assets/sairSvg.svg"
import { Link } from "react-router-dom";
export function HeaderAdmin({onMenuIsOn}) {
  return (
    <Container>
      <button className="menu-mobile" onClick={onMenuIsOn}>
        <FiMenu />
      </button>
      <div>
        <img src={explorerImg} alt="Logo Explorer" />
        <div className="text">
          <h2>Food Explorer</h2>
          <p>admin</p>
        </div>
      </div>
      <div className="input">
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
        />
      </div>
        
          <Link to="/novoprato">
            <Button title="Novo Prato"></Button>
          </Link>
      <img src={sairSvg} alt="ícone para sair" />
    </Container>
  )
}