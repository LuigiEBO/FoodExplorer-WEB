import { Container } from "./style";

export function Button({icon: Icon, title, price, ...rest}) {
  return (
    <Container {...rest}>
      {Icon && <Icon size={13} /> && <img src={Icon} />}
      {title} {price} 
    </Container>
  )
}