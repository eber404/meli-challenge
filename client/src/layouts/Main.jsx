import styled from 'styled-components'

import { Sidebar } from '@/layouts/Sidebar'
import { useSidebar } from '@/hooks/useSidebar'

export function Main({ children }) {
  const { isOpen, toggleSidebar } = useSidebar()

  function handleToggleSidebar() {
    toggleSidebar()
  }

  return (
    <Container>
      <SidebarWrapper isOpen={isOpen}>
        <Sidebar />
      </SidebarWrapper>
      <Overlay isOpen={isOpen} onClick={handleToggleSidebar} />
      <Content>{children}</Content>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template:
    'sidebarwrapper content' 1fr
    / 350px minmax(300px, 690px);
  gap: 25px;

  @media (max-width: 1200px) {
    grid-template-columns: 350px 330px;
  }

  @media (max-width: 768px) {
    grid-template:
      'content' 1fr
      / 1fr;
    gap: 25px;

    gap: 0;
  }
`

const Content = styled.div`
  grid-area: content;
  max-width: 1200px;
`

const SidebarWrapper = styled.div`
  grid-area: sidebarwrapper;
  width: ${({ isOpen }) => (isOpen ? '0' : '100%')};
  max-width: 350px;
`

const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 90;
  transition: all 0.3s ease-in-out;
`
