import {useState, useEffect} from "react"
import { Container } from "./style";
import foodImg from "../../assets/salada.png"
import { useParams } from "react-router-dom";
import {HeaderAdmin} from "../../Components/headerAdmin"
import { Footer } from "../../Components/footer";
import { FiArrowLeft, FiMinus, FiPlus} from "react-icons/fi";
import { Button } from "../../Components/button";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
export function PratoAdmin() {
  const [dataFood, setDataFood] = useState(" ")
  const params = useParams()

  
  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/foods/show/?name=${params.name}`)
      
      setDataFood(response.data[0])
    }
    
    fetchDish()
  }, [])
  return (
    <Container>
      <HeaderAdmin />
      <div className="main">
        <div>
          <Link to="/">
            <FiArrowLeft />
            <h2>Voltar</h2>
          </Link>
        </div>
      { dataFood &&
        <div className="info">
          <img className="pratoImg" src={dataFood.avatar} alt="Imagem do prato" />
          <div className="text">
            <h1>{dataFood.name}</h1>
            <p>
              {dataFood.description}
            </p>
            <div className="ask-food">
              <Link to="/editarprato">
                <Button title={"Editar Prato"} />
              </Link>
            </div>
          </div>
        </div>
      }
      </div>
      <Footer />
    </Container>
  )
}