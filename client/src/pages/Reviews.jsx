import { useEffect } from 'react'
import { BeatLoader } from 'react-spinners'
import styled from 'styled-components'

import { useProducts } from '@/hooks/useProducts'
import { useSidebar } from '@/hooks/useSidebar'
import { Card } from '@/components/Card/Card.container'
import { If } from '@/components/If'
import { theme } from '@/styles/theme'

export function Reviews() {
  const { products, isLoading, hasError, fetchProducts } = useProducts()
  const { isOpen } = useSidebar()

  useEffect(() => {
    if (products.length > 0) return

    fetchProducts()
  }, [''])

  const shouldRender = products?.length > 0 && !isLoading && !hasError

  return (
    <Container>
      <If
        condition={shouldRender}
        elseComponent={<BeatLoader color={theme.palette.primary.main} />}
      >
        <Cards>
          {products.map(({ ...productProps }, index) => (
            <CardBox key={index}>
              <Card {...productProps} />
            </CardBox>
          ))}
        </Cards>
      </If>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  width: 100%;

  @media (max-width: 1200px) {
    gap: 15px;
    grid-template-columns: 1fr;
  }
`

const CardBox = styled.div``
