import { useEffect } from 'react'
import styled from 'styled-components'

import { useCategories } from '@/hooks/useCategories'
import { useProducts } from '@/hooks/useProducts'
import { useSidebar } from '@/hooks/useSidebar'
import { useSearch } from '@/hooks/useSearch'
import { theme } from '@/styles/theme'
import { If } from '@/components/If'

export function Sidebar() {
  const { handleSearchQuery } = useSearch()
  const { fetchCategories, categories, isLoading, hasError } = useCategories()
  const { fetchProducts } = useProducts()
  const { isOpen, toggleSidebar } = useSidebar()

  const shouldRender = categories?.length > 0 && !isLoading && !hasError

  useEffect(() => {
    if (categories.length > 0) return

    fetchCategories()
  }, [''])

  function filterByCategory(category) {
    if (isOpen) {
      toggleSidebar()
    }

    handleSearchQuery('')
    fetchProducts({ category })
  }

  return (
    <Container isOpen={isOpen}>
      <Title>Categorias</Title>
      <If condition={shouldRender}>
        <List>
          {categories.map(({ name, id }, index) => (
            <Item key={index} onClick={() => filterByCategory(id)}>
              {name}
            </Item>
          ))}
        </List>
      </If>
    </Container>
  )
}

const Container = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 30px;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    position: absolute;

    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    top: 0;
    z-index: 100;
    width: 280px;

    border-radius: 0 15px 15px 0;
  }
`

const Title = styled.h3`
  font-size: 18px;
  color: ${theme.palette.secondary.main};
  margin-bottom: 15px;
`

const List = styled.ul`
  list-style-type: none;
`

const Item = styled.li`
  color: ${theme.palette.secondary.main};
  font-size: 16px;
  padding: 6px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
