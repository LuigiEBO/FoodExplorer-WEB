import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import theme from './styles/theme'
import GlobalStyles from "./styles/global"
import { SignIn } from './pages/signIn'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Routes/>
    </ThemeProvider>
  </StrictMode>
)
