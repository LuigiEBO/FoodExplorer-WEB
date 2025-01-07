import {useState, useEffect} from "react"
import { Container } from "./style";
import foodImg from "../../assets/salada.png"
import { useParams } from "react-router-dom";
import {HeaderAdmin} from "../../Components/headerAdmin"
import { Footer } from "../../Components/footer";
import { FiArrowLeft, FiMinus, FiPlus} from "react-icons/fi";
import { Button } from "../../Components/button";
import { Tag } from "../../Components/tags";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
export function DrinkAdmin() {
  const [dataDrink, setDataDrink] = useState(" ")
  const [dataTags, setDataTags] = useState(null)
  const [type, setType] = useState("drinks")
  const params = useParams()
  const id = Number(params.id)

  const navigate = useNavigate()
  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/foods/showDrink?name=${params.name}`)
      
      setDataDrink(response.data[0])
    }
    async function fetchTags() {
      const response = await api.get(`/tags/drinks?id=${id}`)
      setDataTags(response.data)
    }
    fetchTags()
    fetchDish()
  }, [])
  

  const imgFood = params.img
    ? `${api.defaults.baseURL}/files/${params.img}`
    : null


  function hanldeForEdit(type, id, name, price, description) {
    navigate(`/editarprato/${type}/${id}/${name}/${price}/${description}`)
  }
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
        {dataDrink && (
          <div className="info">
            <img className="pratoImg" src={imgFood} alt="Imagem do prato" />
            <div className="text">
              <h1>{dataDrink.name}</h1>
              <p>{dataDrink.description}</p>
              {dataTags && (
                <div className="tags">
                    {dataTags.map((tag) => (
                      <Tag key={String(tag.id)} title={tag.name} />
                    ))}
                </div>
              )}
              <div className="ask-food">
                <Button
                  title={"Editar Prato"}
                  onClick={() => {
                    hanldeForEdit(type, dataDrink.id, dataDrink.name, dataDrink.price, dataDrink.description)
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </Container>
  )
}