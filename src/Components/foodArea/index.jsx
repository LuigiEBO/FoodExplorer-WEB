import { Container } from "./style";
import {FiMinus, FiPlus, } from "react-icons/fi"
import { Button } from "../button";
export function FoodArea ({icon: Icon, img, name, price}) {
  return( 
  <Container>
    {Icon && <Icon size={20} />}
    <img src={img} alt="" />
    <h3>{name}</h3>
    <span>{price}</span>
    <div className="amount">
      <FiMinus/>
        <span>01</span>
      <FiPlus/>
    </div>
    <Button title="Incluir"/>
    </Container>)
}