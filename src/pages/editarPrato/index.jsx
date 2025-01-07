import { useState } from "react";
import { Container } from "./style";
import { HeaderAdmin } from "../../Components/headerAdmin";
import {Footer} from "../../Components/footer";
import { useParams } from "react-router-dom"
import { Input } from "../../Components/input";
import {FiChevronLeft, FiShare} from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
export function EditDish() {
  const params = useParams()
  const [name, setName] = useState(params.name)
  const [price, setPrice] = useState(params.price)
  const [description, setDescription] = useState(params.description)
  const [route, setRoute] = useState("main")
  const [img, setImg] = useState()
  const navigate = useNavigate()

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setImg(file)
  }
  async function handleEditFood() {
    await api.put(`/foods/update?type=${params.type}&id=${params.id}`, {
      name,
      price,
      description,
    })

    const fileForm = new FormData()
    fileForm.append("img", img)
    await api.patch(`/foods/${route}Img/${name}`, fileForm)
    

    alert("Editado com sucesso")
    navigate("/")
  }
  async function handleRemoveFood() {
    await api.delete(`/foods/delete?id=${params.id}`)

    alert("Removido com sucesso")
    navigate("/")
  }
  return (
    <Container>
      <HeaderAdmin />
      <div className="main">
        <div className="back">
          <Link to="/">
            <FiChevronLeft />
            <h3>Voltar</h3>
          </Link>
        </div>
        <h1>Editar Prato</h1>
        <div className="input-area">
          <div className="input-wrapper">
            <input id="foodImg" type="file" onChange={handleChangeAvatar} />
            <p>Imagem do Prato</p>
            <label htmlFor="foodImg">
              <FiShare /> Selecionar Imagem
            </label>
          </div>
          <div className="input-wrapper">
            <p>Nome</p>
            <Input
              placeholder={params.name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </div>
          <div className="input-wrapper">
            <p>Categoria</p>
            <select
              name="categoria"
              id="categoria"
              onChange={(e) => {
                setRoute(e.target.value)
              }}
            >
              <option value="main">Reifeições</option>
              <option value="dessert">Sobremesas</option>
              <option value="drink">Bebidas</option>
            </select>
            </div>
          <div className="input-wrapper">
            <p>Preço</p>
            <Input
              placeholder={params.price}
              onChange={(e) => {
                setPrice(e.target.value)
              }}
            />
          </div>
          <div className="input-wrapper">
            <p>Descrição</p>
            <Input
              className="description"
              placeholder={params.description}
              onChange={(e) => {
                setDescription(e.target.value)
              }}
            />
          </div>
          <div className="buttons">
            <button
              className="delete"
              onClick={() => {
                handleRemoveFood()
              }}
            >
              Excluir Prato
            </button>
            <button
              onClick={() => {
                handleEditFood()
              }}
            >
              Salvar alterações
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  )
}