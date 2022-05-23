import { createContext, useContext, useState } from 'react'

import { apiService } from '@/services/ApiService'

const CategoryContext = createContext({})

export function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(null)

  function fetchCategories() {
    apiService.listCategories().then(({ categories, isLoading, hasError }) => {
      setCategories(categories)
      setIsLoading(isLoading)
      setHasError(hasError)
    })
  }

  return (
    <CategoryContext.Provider
      value={{
        isLoading,
        hasError,
        categories,
        fetchCategories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export function useCategories() {
  const context = useContext(CategoryContext)

  return context
}
