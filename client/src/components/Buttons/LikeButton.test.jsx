import { render, screen } from '@testing-library/react'

import { LikeButton } from './LikeButton'

describe('like button', () => {
  it('should render a filled heart when prop isLiked is true', async () => {
    // given
    const isLiked = true

    // when
    render(<LikeButton isLiked={isLiked} />)
    const filledHeartIcon = screen.queryByTestId('FavoriteIcon')
    const emptyHeartIcon = screen.queryByTestId('FavoriteBorderIcon')

    // then
    expect(filledHeartIcon).toBeInTheDocument()
    expect(emptyHeartIcon).not.toBeInTheDocument()
  })

  it('should render a non filled heart when prop isLiked is false', async () => {
    // given
    const isLiked = false

    // when
    render(<LikeButton isLiked={isLiked} />)
    const emptyHeartIcon = screen.queryByTestId('FavoriteBorderIcon')
    const filledHeartIcon = screen.queryByTestId('FavoriteIcon')

    // then
    expect(emptyHeartIcon).toBeInTheDocument()
    expect(filledHeartIcon).not.toBeInTheDocument()
  })
})
