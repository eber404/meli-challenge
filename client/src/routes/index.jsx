import { Routes, Route, useNavigate } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'

import { Login } from '@/pages/Login/Login.container'
import { Reviews } from '@/pages/Reviews'
import { AppLayout } from '@/layouts/AppLayout'
import { AuthLayout } from '@/layouts/AuthLayout'
import { useAuth } from '@/hooks/useAuth'
import { theme } from '@/styles/theme'

function HandleProtectedRoute({ children }) {
  const { isLoading, isLoggedIn } = useAuth()
  const navigate = useNavigate()

  if (isLoading) {
    return <BeatLoader color={theme.palette.primary.main} />
  }

  return isLoggedIn ? children : navigate('/')
}

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />
      <Route
        path="/reviews"
        element={
          <HandleProtectedRoute>
            <AppLayout>
              <Reviews />
            </AppLayout>
          </HandleProtectedRoute>
        }
      />
    </Routes>
  )
}
