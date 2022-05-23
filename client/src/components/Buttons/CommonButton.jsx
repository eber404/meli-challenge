import propTypes from 'prop-types'
import { Button as MButton, styled } from '@mui/material'

export function CommonButton({
  children,
  onClick,
  size = 'medium',
  fullWidth = true,
  variant = 'contained',
  name = '',
}) {
  return (
    <SButton
      color="primary"
      onClick={onClick}
      variant={variant}
      fullWidth={fullWidth}
      size={size}
      name={name}
    >
      {children}
    </SButton>
  )
}

const SButton = styled(MButton)`
  height: 48px;
  border-radius: 8px;
  box-shadow: none;
  font-weight: bold;
  text-transform: none;

  &:hover {
    box-shadow: none;
  }
`

CommonButton.propTypes = {
  children: propTypes.any.isRequired,
  onClick: propTypes.func,
  variant: propTypes.string,
  color: propTypes.string,
  fullWidth: propTypes.bool,
  size: propTypes.string,
  name: propTypes.string,
}
