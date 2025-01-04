import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";
import { CustomerRoutes } from "./customer.routes";
import { AdminRoutes } from "./admin.routes";
export function Routes() {
  const {user} =  useAuth()

  function SelectRoute() {
    switch(user.role) {
      case "admin":
      return <AdminRoutes/>;
      case "customer":
      return <CustomerRoutes/>;
      default: 
      return <CustomerRoutes/>
    }
  }
  return (
    <BrowserRouter>
      {user? <SelectRoute/> : <AuthRoutes/>}
    </BrowserRouter>
  )
}