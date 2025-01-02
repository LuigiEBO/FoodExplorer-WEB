import {useState, useEffect} from "react"
import { Container } from "./style";
import foodImg from "../../assets/salada.png"
import receiptSvg from "../../assets/Receipt.svg"
import {HeaderAdmin} from "../../Components/headerAdmin"
import { Footer } from "../../Components/footer";
import { FiArrowLeft, FiMinus, FiPlus} from "react-icons/fi";
import { Button } from "../../Components/button";
export function PratoAdmin() {
  const [amount, setAmount] = useState(1)
  return (
    <Container>
      <HeaderAdmin />
      <div className="main">
        <div>
          <FiArrowLeft />
          <h2>Voltar</h2>
        </div>

        <div className="info">
          <img className="pratoImg" src={foodImg} alt="Imagem do prato" />
          <div className="text">
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>
            <div className="ask-food">
              <Button title={"Editar Prato"}/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  )
}