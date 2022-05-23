import { createContext, useState, useContext } from 'react'

const SidebarContext = createContext({})

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleSidebar(condition) {
    setIsOpen(!isOpen)
  }

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)

  return context
}
