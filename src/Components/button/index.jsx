import { Container } from "./style";

export function Button({icon: Icon, title}) {
  return (
    <Container>
      {Icon && <Icon size={13} /> && <img src={Icon} />}
      {title}
    </Container>
  )
}