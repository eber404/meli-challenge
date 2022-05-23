import propTypes from 'prop-types'

export function If({ children, condition = false, elseComponent = <></> }) {
  return condition ? children : elseComponent
}

If.propTypes = {
  children: propTypes.any.isRequired,
  condition: propTypes.any,
  elseComponent: propTypes.node,
}
