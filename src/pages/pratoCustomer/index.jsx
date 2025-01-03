import {useState, useEffect} from "react"
import { Container } from "./style";
import foodImg from "../../assets/salada.png"
import receiptSvg from "../../assets/Receipt.svg"
import {Header} from "../../Components/header"
import { Footer } from "../../Components/footer";
import { FiArrowLeft, FiMinus, FiPlus} from "react-icons/fi";
import { Button } from "../../Components/button";
import { Link } from "react-router-dom";
export function PratoCustomer() {
  const [amount, setAmount] = useState(1)
  return (
    <Container>
      <Header />
      <div className="main">
        <div>
          <Link to="/">
            <FiArrowLeft />
            <h2>Voltar</h2>
          </Link>
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
              <FiMinus onClick={() => setAmount(amount - 1)} />
              <span>{amount}</span>
              <FiPlus onClick={() => setAmount(amount + 1)} />
              <Button
                title={"Pedir R$"}
                price={49.99 * amount}
                icon={receiptSvg}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  )
}