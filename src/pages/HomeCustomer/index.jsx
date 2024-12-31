import { useEffect, useState } from "react";
import { Container } from "./style";
import { Header } from "../../Components/header";
import { MenuMobile } from "../../Components/menuMobile";
export function HomeCustomer() {
  const [menuIsOn, setMenuIsOn] = useState(false);
  return (
    <Container>
      <Header onMenuIsOn={() => setMenuIsOn(true)}/>
      <MenuMobile menuIsOn={menuIsOn} onMenuIsOff={() => {setMenuIsOn(false)}}/>
    </Container>
  )
}