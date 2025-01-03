import { useEffect, useState } from "react";
import homeImg from "../../assets/homeImg.png"
import foodImg from "../../assets/salada.png"
import { Container } from "./style";
import { FoodArea } from "../../Components/foodArea";
import { Header } from "../../Components/header";
import { MenuMobile } from "../../Components/menuMobile";
import { Footer } from "../../Components/footer";
import { FiHeart} from "react-icons/fi";
import { Link } from "react-router-dom";
export function HomeCustomer() {
  const [menuIsOn, setMenuIsOn] = useState(false);
  return (
    <Container>
      <Header onMenuIsOn={() => setMenuIsOn(true)} />
      <MenuMobile
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
            <FoodArea
              icon={FiHeart}
              img={foodImg}
              name="Salda Ravanello"
              price="R$49,99"
            />
          </Link>
        </div>
        <h2>Pratos Principais</h2>
        <div className="scroll-foods">
          
        </div>
        <h2>Bebidas</h2>
        <div className="scroll-foods">
          
        </div>
      </div>
      <Footer />
    </Container>
  )
}