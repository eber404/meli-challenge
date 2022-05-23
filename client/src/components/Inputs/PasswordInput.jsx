import { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import { Visibility, VisibilityOff } from '@mui/icons-material/'
import {
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  styled,
} from '@mui/material'

export function PasswordInput({ label, onChange, ...rest }) {
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  useEffect(() => {
    onChange(values.password)
  }, [values.password])

  return (
    <SFormControl variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
        label={label}
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              data-testid="toggle-password-visibility"
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        {...rest}
      />
    </SFormControl>
  )
}

const SFormControl = styled(FormControl)`
  width: 100%;
  margin-top: 15px;
`

PasswordInput.propTypes = {
  label: propTypes.string,
  onChange: propTypes.func,
}
