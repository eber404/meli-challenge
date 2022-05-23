import styled from 'styled-components'

export function AuthLayout({ children }) {
  return <Container>{children}</Container>
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`
