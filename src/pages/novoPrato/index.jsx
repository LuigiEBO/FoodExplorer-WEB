import { useState, useEffect } from "react";
import { Container } from "./style";
import { HeaderAdmin } from "../../Components/headerAdmin";
import {Footer} from "../../Components/footer"
import { Input } from "../../Components/input";
import {FiChevronLeft, FiShare} from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
export function NewDish() {
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [img, setImg] = useState()
  const [description, setDescription] = useState()
  const [route, setRoute] = useState("main")
  const navigate = useNavigate()
  async function handleNewFood(img) {
    await api.post(`/foods/${route}`, {
      name,
      price,
      description,
    })

    const fileForm = new FormData()
    fileForm.append("img", img)
    console.log(fileForm)
    const response = await api.patch(`/foods/${route}Img/${name}`, fileForm)
    

    alert("Novo prato criado com sucesso")
    navigate("/")
  }
  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setImg(file);
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
        <h1>Novo Prato</h1>
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
              placeholder="Ex: Salada de Caesar"
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
              placeholder="R$00,00"
              onChange={(e) => {
                setPrice(e.target.value)
              }}
            />
          </div>
          <div className="input-wrapper">
            <p>Descrição</p>
            <Input
              className="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => {
                setDescription(e.target.value)
              }}
            />
          </div>
          <button onClick={() => handleNewFood(img)}>Salvar alterações</button>
        </div>
      </div>
      <Footer />
    </Container>
  )
}