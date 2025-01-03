import { Routes, Route } from "react-router-dom";

import { Navigate } from "react-router-dom";
import {HomeCustomer} from "../pages/HomeCustomer"
import {PratoCustomer} from "../pages/pratoCustomer"

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeCustomer/>}/>
      <Route path="/prato" element={<PratoCustomer/>}/>
    </Routes>
  )
}