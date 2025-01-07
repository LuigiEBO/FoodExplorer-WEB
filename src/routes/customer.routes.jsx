import { Routes, Route } from "react-router-dom";

import { Navigate } from "react-router-dom";
import {HomeCustomer} from "../pages/HomeCustomer"
import {PratoCustomer} from "../pages/pratoCustomer"
import { DrinkCustomer } from "../pages/DrinkCustomer";
import { DessertCustomer } from "../pages/DessertCustomer";
export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeCustomer />} />
      <Route path="/prato/:name/:img" element={<PratoCustomer />} />
      <Route path="/drink/:name/:img" element={<DrinkCustomer />} />
      <Route path="/dessert/:name/:img" element={<DessertCustomer />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}