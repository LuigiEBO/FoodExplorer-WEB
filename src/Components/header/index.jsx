import { Container } from "./style";
import explorerImg from "../../assets/Polygon.svg"
import receiptSvg from "../../assets/Receipt.svg"
import {Input} from "../input/index"
import {Button} from "../button"
import {FiSearch, FiMenu} from "react-icons/fi"
import sairSvg from "../../assets/sairSvg.svg"
export function Header({onMenuIsOn}) {
  return (
    <Container>
      <button className="menu-mobile" onClick={onMenuIsOn}>
        <FiMenu />
      </button>
      <div>
        <img src={explorerImg} alt="Logo Explorer" />
        <h2>Food Explorer</h2>
      </div>
      <div className="input">
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
        />
      </div>
      <Button icon={receiptSvg} title="Carrinho" />
      <img src={sairSvg} alt="ícone para sair" />
      <img
        className="carrinho"
        src={receiptSvg}
        alt="icon para ver o carrinho"
      />
    </Container>
  )
}