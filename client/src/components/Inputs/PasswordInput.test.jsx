import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { PasswordInput } from './PasswordInput'

describe('password input component', () => {
  it('should render input component with the given label', () => {
    // given
    const label = 'im an input label'

    // when
    render(<PasswordInput label={label} />)
    const inputElement = screen.getByLabelText(label)

    // then
    expect(inputElement).toBeInTheDocument()
  })

  it('should change password visibility on toggle', () => {
    // given
    const label = 'im an input label'
    const password = 'im a password'

    // when
    render(<PasswordInput label={label} />)
    const inputElement = screen.getByLabelText(label)
    const iconElement = screen.getByTestId('toggle-password-visibility')
    userEvent.type(inputElement, password)

    act(() => {
      iconElement.click()
    })

    // then
    expect(inputElement.value).toBe(password)
  })
})
