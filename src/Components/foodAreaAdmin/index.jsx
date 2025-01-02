import { Container } from "./style";
import {FiMinus, FiPlus, } from "react-icons/fi"
import { Button } from "../button";
export function FoodAreaAdmin ({icon: Icon, img, name, price}) {
  return( 
  <Container>
    {Icon && <Icon size={20} />}
    <img src={img} alt="" />
    <h3>{name}</h3>
    <span>{price}</span>
    </Container>)
}