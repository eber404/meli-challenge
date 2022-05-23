import { createContext, useContext, useEffect, useState } from 'react'

import { apiService } from '@/services/ApiService'

const ProductContext = createContext({})

const DEFAULT_QUERY = 'promocao'

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(null)

  async function fetchProducts(props) {
    let query = props?.query || ''
    const category = props?.category || ''

    if (query.length === 0 && category.length === 0) {
      query = DEFAULT_QUERY
    }

    setIsLoading(true)

    apiService
      .listProducts({ query, category })
      .then(({ products }) => setProducts(products))
      .catch(setHasError)
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    if (isLoading) {
      setProducts([])
    }
  }, [isLoading])

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
        hasError,
        fetchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductContext)

  return context
}
