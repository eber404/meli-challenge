import styled from 'styled-components'

import { Main } from './Main'
import { Header } from './Header'

export function AppLayout({ children }) {
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <MainWrapper>
        <Main>{children}</Main>
      </MainWrapper>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template:
    'headerwrapper' 80px
    'mainwrapper' 1fr
    'footer' 80px
    / 1fr;
`

const HeaderWrapper = styled.div`
  grid-area: headerwrapper;
  height: 80px;
`

const MainWrapper = styled.div`
  grid-area: mainwrapper;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

const Footer = styled.div`
  grid-area: footer;
  height: 80px;
`
