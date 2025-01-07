import { Container } from "./style";
import explorerImg from "../../assets/Polygon.svg"
import receiptSvg from "../../assets/Receipt.svg"
import {Button} from "../button"
import { useAuth } from "../../hooks/auth";
import {FiSearch, FiMenu} from "react-icons/fi"
import sairSvg from "../../assets/sairSvg.svg"
export function Header({onMenuIsOn, input}) {
  const {Logout} = useAuth()
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
        {input}
      </div>
      <Button icon={receiptSvg} title="Carrinho" />
      <img src={sairSvg} alt="ícone para sair" onClick={Logout} />
      <img
        className="carrinho"
        src={receiptSvg}
        alt="icon para ver o carrinho"
      />
    </Container>
  )
}