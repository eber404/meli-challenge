import { ThemeProvider } from '@mui/material/styles'

import { theme } from '@/styles/theme'

import { SearchProvider } from './useSearch'
import { ProductProvider } from './useProducts'
import { CategoryProvider } from './useCategories'
import { SidebarProvider } from './useSidebar'
import { AuthProvider } from './useAuth'

export function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <SearchProvider>
          <CategoryProvider>
            <ProductProvider>
              <SidebarProvider>{children}</SidebarProvider>
            </ProductProvider>
          </CategoryProvider>
        </SearchProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
