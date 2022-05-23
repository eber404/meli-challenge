import { render, screen, act } from '@testing-library/react'

import { Stars } from './Stars'

describe('stars component', () => {
  it('should render properly the number of filled and empty stars', () => {
    // given
    const rate = 3
    const starsLength = 5
    const expectedEmptyStarsLength = starsLength - rate

    // when
    render(<Stars rate={rate} length={starsLength} />)
    const filledStarsElement = screen.queryAllByTestId('StarIcon')
    const emptyStarsElement = screen.queryAllByTestId('StarBorderIcon')

    // then
    expect(filledStarsElement.length).toEqual(rate)
    expect(emptyStarsElement.length).toEqual(expectedEmptyStarsLength)
  })

  it('should change properly the number of filled stars on click', () => {
    // given
    const rate = 3

    // when
    render(<Stars rate={rate} />)
    const oldFilledStarsElement = screen.queryAllByTestId('StarIcon')
    const emptyStarElement = screen.queryByTestId(`star-box-${rate}`)

    act(() => {
      emptyStarElement.click()
    })

    const newFilledStarsElement = screen.queryAllByTestId('StarIcon')

    // then
    expect(newFilledStarsElement.length).toEqual(
      oldFilledStarsElement.length + 1
    )
  })
})
