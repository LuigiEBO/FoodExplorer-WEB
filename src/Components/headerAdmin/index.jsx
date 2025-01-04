import { Container } from "./style";
import explorerImg from "../../assets/Polygon.svg"
import {Button} from "../button"
import { FiMenu} from "react-icons/fi"
import sairSvg from "../../assets/sairSvg.svg"
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
export function HeaderAdmin({onMenuIsOn, input}) {
  const {Logout} = useAuth()
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
        {input}
      </div>
        
          <Link to="/novoprato">
            <Button title="Novo Prato"></Button>
          </Link>
      <img src={sairSvg} alt="ícone para sair" onClick={Logout}/>
    </Container>
  )
}