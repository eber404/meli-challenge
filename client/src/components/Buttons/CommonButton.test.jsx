import { render, screen } from '@testing-library/react'

import { CommonButton } from './CommonButton'

describe('button jsx', () => {
  it('should render button with especific title', () => {
    // given
    const title = "i'm a button"

    // when
    render(<CommonButton>{title}</CommonButton>)
    const linkElement = screen.getByText(title)

    // then
    expect(linkElement).toBeInTheDocument()
  })

  it('should execute callback function on click', () => {
    // given
    const title = "i'm a button"
    const callback = jest.fn()

    // when
    render(<CommonButton onClick={callback}>{title}</CommonButton>)
    const buttonElement = screen.getByText(title)
    buttonElement.click()

    // then
    expect(callback).toBeCalledTimes(1)
  })
})
