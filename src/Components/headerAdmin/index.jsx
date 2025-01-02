import { Container } from "./style";
import explorerImg from "../../assets/Polygon.svg"
import receiptSvg from "../../assets/Receipt.svg"
import {Input} from "../input/index"
import {Button} from "../button"
import {FiSearch, FiMenu} from "react-icons/fi"
import sairSvg from "../../assets/sairSvg.svg"
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
      <Button title="Novo Prato" />
      <img src={sairSvg} alt="ícone para sair" />
    </Container>
  )
}