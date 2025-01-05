import {useState} from "react"
import { Container } from "./style";
import {FiMinus, FiPlus, } from "react-icons/fi"
import { Button } from "../button";
export function FoodArea ({icon: Icon, img, name, price, ...rest}) {
  const [amount, setAmount] = useState(1)
  return (
    <Container {...rest}>
      {Icon && <Icon size={20} />}
      <img src={img} alt="" />
      <h3>{name}</h3>
      <span>{price}</span>
      <div className="amount">
        <FiMinus onClick={() => setAmount(amount - 1)} />
        <span>{amount}</span>
        <FiPlus onClick={() => setAmount(amount + 1)} />
      </div>
      <Button title="Incluir" />
    </Container>
  )
}