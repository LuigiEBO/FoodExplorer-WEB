import { Container } from "./style";
import { HeaderAdmin } from "../../Components/headerAdmin";
import {Footer} from "../../Components/footer"
import { Input } from "../../Components/input";
import {FiChevronLeft, FiShare} from "react-icons/fi"
import { Link } from "react-router-dom";
export function NewDish() {
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
            <input id="foodImg" type="file" />
            <p>Imagem do Prato</p>
            <label htmlFor="foodImg">
              <FiShare /> Selecionar Imagem
            </label>
          </div>
          <div className="input-wrapper">
            <p>Nome</p>
            <Input placeholder="Ex: Salada de Caesar" />
          </div>
          <div className="input-wrapper">
            <p>Categoria</p>
            <select name="categoria" id="categoria">
              <option value="foods">Reifeições</option>
              <option value="desserts">Sobremesas</option>
              <option value="drinks">Bebidas</option>
            </select>
          </div>
          <div className="input-wrapper">
            <p>Preço</p>
            <Input placeholder="R$00,00" />
          </div>
          <div className="input-wrapper">
            <p>Descrição</p>
            <Input
              className="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
          </div>
          <button>Salvar alterações</button>
        </div>
      </div>
      <Footer />
    </Container>
  )
}