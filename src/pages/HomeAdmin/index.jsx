import { useEffect, useState } from "react";
import homeImg from "../../assets/homeImg.png"
import foodImg from "../../assets/salada.png"
import { Container } from "./style";
import { FoodAreaAdmin } from "../../Components/foodAreaAdmin";
import { HeaderAdmin } from "../../Components/headerAdmin";
import { MenuMobileAdmin } from "../../Components/menuMobileAdmin";
import { Footer } from "../../Components/footer";
import { FiEdit} from "react-icons/fi";
import { Link } from "react-router-dom";
export function HomeAdmin() {
  const [menuIsOn, setMenuIsOn] = useState(false);
  return (
    <Container>
      <HeaderAdmin onMenuIsOn={() => setMenuIsOn(true)} />
      <MenuMobileAdmin
        menuIsOn={menuIsOn}
        onMenuIsOff={() => {
          setMenuIsOn(false)
        }}
      />
      <div className="home">
        <div className="home-decoration">
          <img src={homeImg} alt="imagem de macarrons, folhas e sementes" />
          <div className="text">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>
        <h2>Refeições</h2>
        <div className="scroll-foods">
          <Link to="/prato">
            <FoodAreaAdmin icon={FiEdit} img={foodImg} price="R$49,99" />{" "}
          </Link>
          <FoodAreaAdmin icon={FiEdit} img={foodImg} price="R$49,99" />
          <FoodAreaAdmin icon={FiEdit} img={foodImg} price="R$49,99" />
          <FoodAreaAdmin icon={FiEdit} img={foodImg} price="R$49,99" />
          <FoodAreaAdmin icon={FiEdit} img={foodImg} price="R$49,99" />
          <FoodAreaAdmin icon={FiEdit} img={foodImg} price="R$49,99" />
          <FoodAreaAdmin icon={FiEdit} img={foodImg} price="R$49,99" />
          <FoodAreaAdmin icon={FiEdit} img={foodImg} price="R$49,99" />
        </div>
        <h2>Pratos Principais</h2>
        <div className="scroll-foods">
          <FoodAreaAdmin icon={FiEdit} img={foodImg} price="R$49,99" />
          <FoodAreaAdmin icon={FiEdit} img={foodImg} price="R$49,99" />
          <FoodAreaAdmin icon={FiEdit} img={foodImg} price="R$49,99" />
          <FoodAreaAdmin icon={FiEdit} img={foodImg} price="R$49,99" />
          <FoodAreaAdmin icon={FiEdit} img={foodImg} price="R$49,99" />
          <FoodAreaAdmin icon={FiEdit} img={foodImg} price="R$49,99" />
        </div>
        <h2>Bebidas</h2>
        <div className="scroll-foods">
          <FoodAreaAdmin icon={FiEdit} img={foodImg} price="R$49,99" />
          <FoodAreaAdmin icon={FiEdit} img={foodImg} price="R$49,99" />
          <FoodAreaAdmin icon={FiEdit} img={foodImg} price="R$49,99" />
          <FoodAreaAdmin icon={FiEdit} img={foodImg} price="R$49,99" />
          <FoodAreaAdmin icon={FiEdit} img={foodImg} price="R$49,99" />
          <FoodAreaAdmin icon={FiEdit} img={foodImg} price="R$49,99" />
        </div>
      </div>
      <Footer />
    </Container>
  )
}