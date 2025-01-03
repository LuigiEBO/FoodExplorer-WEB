import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
const AuthContext = createContext({})

function AuthProvider ({children}) {
  const [data, setData] = useState({})
  async function SignIn({email, password}) {
    try {
      const response = await api.post("/sessions", {email, password})
      const {user, token} = response.data
      
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({user, token})
    } catch (error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar")
      }
    }
  }
  return (
     <AuthContext.Provider value={{SignIn, user: data.user}} >
      {children}
     </AuthContext.Provider>
  )
}
function useAuth() {
  const context = useContext(AuthContext)

  return context
}
export {AuthProvider, useAuth}