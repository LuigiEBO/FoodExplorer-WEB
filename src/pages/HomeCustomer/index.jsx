import { useEffect, useState } from "react";
import homeImg from "../../assets/homeImg.png"
import foodImg from "../../assets/salada.png"
import { Container } from "./style";
import { FoodArea } from "../../Components/foodArea";
import { Header } from "../../Components/header";
import { MenuMobile } from "../../Components/menuMobile";
import { Input } from "../../Components/input";
import { Footer } from "../../Components/footer";
import { FiHeart, FiSearch} from "react-icons/fi";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
export function HomeCustomer() {
  const [menuIsOn, setMenuIsOn] = useState(false);
  const [name, setSearch] = useState("")
  const [foods, setFoods] = useState([])
  const [drinks, setDrinks] = useState([])
  const [desserts, setDesserts] = useState([])

  useEffect(() => {
    async function fetchFoods() {
      const response = await api.get(`/foods?name=${name}`)
      setFoods(response.data[0])
      setDrinks(response.data[1])
      setDesserts(response.data[2])
    }

    fetchFoods()
  }, [name])
  return (
    <Container>
      <Header
        onMenuIsOn={() => setMenuIsOn(true)}
        input={
          <Input
            placeholder="Busque por pratos ou ingredientes"
            icon={FiSearch}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
      />
      <MenuMobile
        menuIsOn={menuIsOn}
        onMenuIsOff={() => {
          setMenuIsOn(false)
        }}
        input={
          <Input
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => setSearch(e.target.value)}
          />
        }
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
            {foods.map((food) => (
              <FoodArea
                icon={FiHeart}
                img={food.avatar}
                name={food.name}
                price={food.price}
              />
            ))}
          </Link>
        </div>
        <h2>Pratos Principais</h2>
        <div className="scroll-foods">
          <Link to="/prato">
            {desserts.map((dessert) => (
              <FoodArea
                icon={FiHeart}
                img={dessert.avatar}
                name={dessert.name}
                price={dessert.price}
              />
            ))}
          </Link>
        </div>
        <h2>Bebidas</h2>
        <div className="scroll-foods">
          <Link to="/prato">
            {drinks.map((drink) => (
              <FoodArea
                icon={FiHeart}
                img={drink.avatar}
                name={drink.name}
                price={drink.price}
              />
            ))}
          </Link>
        </div>
      </div>
      <Footer />
    </Container>
  )
}