import { Container } from "./style";

export function Input({icon: Icon, ...rest}) {
  return(
    <Container>
      {Icon && <icon size={20}/>}
      <input {...rest} />
    </Container>
  )
}