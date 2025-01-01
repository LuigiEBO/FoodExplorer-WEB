import { Container } from "./style";

export function Button({icon: Icon, title, price}) {
  return (
    <Container>
      {Icon && <Icon size={13} /> && <img src={Icon} />}
      {title} {price}
    </Container>
  )
}