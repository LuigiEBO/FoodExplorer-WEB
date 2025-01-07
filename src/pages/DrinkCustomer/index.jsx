import {useState, useEffect} from "react"
import { Container } from "./style";
import foodImg from "../../assets/salada.png"
import receiptSvg from "../../assets/Receipt.svg"
import {Header} from "../../Components/header"
import { Footer } from "../../Components/footer";
import { FiArrowLeft, FiMinus, FiPlus} from "react-icons/fi";
import { Button } from "../../Components/button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
export function DrinkCustomer() {
  const [amount, setAmount] = useState(1);
  const [dataDrink, setDataDrinks] = useState(" ")
  const params = useParams()

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/foods/showDrink?name=${params.name}`)

      setDataDrinks(response.data[0])
    }

    fetchDish()
  }, [])
  const imgFood = params.img
    ? `${api.defaults.baseURL}/files/${params.img}`
    : null
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

        {dataDrink && 
          <div className="info">
            <img className="pratoImg" src={imgFood} alt="Imagem do prato" />
            <div className="text">
              <h1>{dataDrink.name}</h1>
              <p>
                {dataDrink.description}
              </p>
              <div className="ask-food">
                <FiMinus onClick={() => setAmount(amount - 1)} />
                <span>{amount}</span>
                <FiPlus onClick={() => setAmount(amount + 1)} />
                <Button
                  title={"Pedir R$"}
                  price={dataDrink.price}
                  icon={receiptSvg}
                />
              </div>
            </div>
          </div>
        }
      </div>
      <Footer />
    </Container>
  )
}