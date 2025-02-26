import { Routes, Route } from "react-router-dom";

import { Navigate } from "react-router-dom";

import {SignIn} from "../pages/signIn"
import {SignUp} from "../pages/signUp"
export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="register" element={<SignUp />} />
      <Route path="*" element={<SignIn />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}