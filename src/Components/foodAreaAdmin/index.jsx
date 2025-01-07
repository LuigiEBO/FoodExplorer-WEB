import { Container } from "./style";
import {FiMinus, FiPlus, } from "react-icons/fi"
import { Button } from "../button";
import { api } from "../../services/api";
export function FoodAreaAdmin ({icon: Icon, img, name, price,test, ...rest}) {
  const imgFood = img ? `${api.defaults.baseURL}/files/${img}`
    : null
  return( 
  <Container {...rest}>
    {Icon && <Icon size={20} />}
    <img src={imgFood} alt="" />
    <h3>{name}</h3>
    <span>{price}</span>
    </Container>)
}