import { render, screen } from '@testing-library/react'
import crypto from 'node:crypto'

import { If } from './If'

describe('if component', () => {
  it('should render children if condition is true', () => {
    // given
    const condition = true

    const testId = crypto.randomUUID()
    const children = <p data-testid={testId}>im just a children component</p>

    // when
    render(<If condition={condition}>{children}</If>)
    const element = screen.getByTestId(testId)

    // then
    expect(element).toBeInTheDocument()
  })

  it('should render else component if condition is false', () => {
    // given
    const condition = false

    const childrenId = 'container-component-id'
    const children = <p data-testid={childrenId}></p>

    const elseId = 'else-component-id'
    const elseComponent = <p data-testid={elseId}></p>

    // when
    render(
      <If condition={condition} elseComponent={elseComponent}>
        {children}
      </If>
    )
    const elseComponentElement = screen.getByTestId(elseId)
    const getChildrenElement = () => screen.getByTestId(childrenId)

    // then
    expect(elseComponentElement).toBeInTheDocument()
    expect(getChildrenElement).toThrowError()
  })
})
