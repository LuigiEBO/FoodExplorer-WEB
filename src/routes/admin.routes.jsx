import { Routes, Route } from "react-router-dom";

import { Navigate } from "react-router-dom";

import {HomeAdmin} from "../pages/HomeAdmin"
import { PratoAdmin } from "../pages/pratoAdmin"
import {NewDish} from "../pages/novoPrato"
import {EditDish} from "../pages/editarPrato"

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="prato" element={<PratoAdmin />} />
      <Route path="/novoprato" element={<NewDish />} />
      <Route path="/editarprato" element={<EditDish />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}