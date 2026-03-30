"use client"
import { useState, createContext, useContext } from "react"

export const TemaContext = createContext()

export function useTema() {
  return useContext(TemaContext)
}

export default function ThemeProvider({ children }) {
  const [modoEscuro, setModoEscuro] = useState(false)

  const toggleTema = () => {
    const novoModo = !modoEscuro
    setModoEscuro(novoModo)
    document.documentElement.setAttribute("data-theme", novoModo ? "dark" : "light")
  }

  return (
    <TemaContext.Provider value={{ modoEscuro, toggleTema }}>
      {children}
    </TemaContext.Provider>
  )
}