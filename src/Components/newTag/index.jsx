import { FiPlus, FiX } from "react-icons/fi"
import { Container } from "./style"

export function NewTag({ isNew, onclick, value, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button
        type="text"
        onClick={onclick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
