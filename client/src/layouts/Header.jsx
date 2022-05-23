import styled from 'styled-components'
import { IconButton } from '@mui/material'
import { Menu, Logout } from '@mui/icons-material'

import { theme } from '@/styles/theme'
import { useSidebar } from '@/hooks/useSidebar'
import { Search } from '@/components/Search/Search.container'
import { useAuth } from '@/hooks/useAuth'

export function Header() {
  const { toggleSidebar } = useSidebar()
  const { signOut } = useAuth()

  function handleSidebar() {
    toggleSidebar()
  }

  return (
    <Container>
      <MenuWrapper>
        <IconButton onClick={handleSidebar}>
          <Menu />
        </IconButton>
      </MenuWrapper>
      <Search />
      <LogoutWrapper>
        <IconButton onClick={signOut}>
          <Logout color="secondary" />
        </IconButton>
      </LogoutWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${theme.palette.primary.main};

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const MenuWrapper = styled.div`
  display: none;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: block;
  }
`

const LogoutWrapper = styled.div`
  position: absolute;
  right: 10px;

  @media (max-width: 768px) {
    margin-left: 10px;
    position: relative;
  }
`
