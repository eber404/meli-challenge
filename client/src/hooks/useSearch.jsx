import { createContext, useContext, useState } from 'react'

const SearchContext = createContext({})

export function SearchProvider({ children }) {
  const [query, setQuery] = useState('')

  function handleSearchQuery(query) {
    setQuery(query)
  }

  return (
    <SearchContext.Provider value={{ query, handleSearchQuery }}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)

  return context
}
