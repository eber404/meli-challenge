import { useProducts } from '@/hooks/useProducts'
import { useSearch } from '@/hooks/useSearch'

import * as Styled from './Search.styles'

export function Search() {
  const { fetchProducts } = useProducts()
  const { query, handleSearchQuery } = useSearch()

  function handleFetchProducts() {
    fetchProducts({ query })
  }

  function handleChange(e) {
    handleSearchQuery(e.target.value)
  }

  function handleSearch(e) {
    const pressedKey = e.code

    if (pressedKey === 'Enter' || pressedKey === 'NumpadEnter') {
      handleFetchProducts()
    }
  }

  return (
    <Styled.Container>
      <Styled.InputWrapper>
        <Styled.Input
          onChange={handleChange}
          onKeyDown={handleSearch}
          value={query}
          placeholder="Pesquisar por... "
          fullWidth
        />
        <Styled.IconWrapper>
          <Styled.Divider orientation="vertical" />
          <Styled.IconButton size="medium" onClick={handleFetchProducts}>
            <Styled.Icon />
          </Styled.IconButton>
        </Styled.IconWrapper>
      </Styled.InputWrapper>
    </Styled.Container>
  )
}
