import { Routes, Route } from "react-router-dom";

import { Navigate } from "react-router-dom";

import {HomeAdmin} from "../pages/HomeAdmin"
import { PratoAdmin } from "../pages/pratoAdmin"
import { DrinkAdmin } from "../pages/DrinkAdmin";
import { DessertAdmin } from "../pages/DessertAdmin";
import {NewDish} from "../pages/novoPrato"
import {EditDish} from "../pages/editarPrato"

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/prato/:name/:img/:id" element={<PratoAdmin />} />
      <Route path="/drink/:name/:img/:id" element={<DrinkAdmin />} />
      <Route path="/dessert/:name/:img/:id" element={<DessertAdmin />} />
      <Route path="/novoprato" element={<NewDish />} />
      <Route
        path="/editarprato/:type/:id/:name/:price/:description"
        element={<EditDish />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}