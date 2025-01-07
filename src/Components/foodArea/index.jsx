import {useState} from "react"
import { Container } from "./style";
import {FiMinus, FiPlus, } from "react-icons/fi"
import { Button } from "../button";
import { api } from "../../services/api";
export function FoodArea ({icon: Icon, img, name, price, description, ...rest}) {
  const imgFood = img ? `${api.defaults.baseURL}/files/${img}`
      : null
  const [amount, setAmount] = useState(1)
  return (
    <Container {...rest}>
      {Icon && <Icon size={20} />}
      <img src={imgFood} alt="" />
      <h3>{name}</h3>
      <span>{price}</span>
      <p>{description}</p>
      <div className="amount">
        <FiMinus onClick={() => setAmount(amount - 1)} />
        <span>{amount}</span>
        <FiPlus onClick={() => setAmount(amount + 1)} />
      </div>
      <Button title="Incluir" />
    </Container>
  )
}