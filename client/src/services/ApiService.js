import axios from 'axios'

class ApiService {
  constructor() {
    this.http = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
    })
  }

  async listProducts(props) {
    try {
      const query = props?.query ? `q=${props.query}` : ''
      const category = props?.category ? `category=${props.category}` : ''

      const url = ['/products?', query, category].join('&').replace('&', '')

      const res = await this.http.get(url)

      const products = res.data
      const hasError = res?.message?.toLowerCase().includes('error')
      const isLoading = res.data.length === 0 && !hasError

      return { products, isLoading, hasError }
    } catch (error) {
      return { products: [], isLoading: false, hasError: error.response }
    }
  }

  async listCategories() {
    try {
      const res = await this.http.get('/products/categories')

      const categories = res.data
      const hasError = res?.message?.toLowerCase().includes('error')
      const isLoading = res?.data?.length === 0 && !hasError

      return { categories, isLoading, hasError }
    } catch (error) {
      return { categories: [], isLoading: false, hasError: error.response }
    }
  }

  async signIn(email, password) {
    try {
      const res = await this.http.post('/login', { email, password })

      const { access_token: token } = res.data
      const hasError = res?.message?.toLowerCase().includes('error')
      const isLoading = res?.data?.length === 0 && !hasError

      return { token, isLoading, hasError }
    } catch (error) {
      return { token: null, isLoading: false, hasError: error.response }
    }
  }
}

export const apiService = new ApiService()
