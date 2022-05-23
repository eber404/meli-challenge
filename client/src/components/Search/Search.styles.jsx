import styled from 'styled-components'
import { Search } from '@mui/icons-material/'

import {
  styled as MStyled,
  Divider as MDivider,
  IconButton as MIconButton,
  InputBase,
} from '@mui/material'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 600px;

  @media (max-width: 768px) {
    margin-left: 15px;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`

export const Input = MStyled(InputBase)`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 5px 60px 5px 25px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 360px) {
    padding: 5px 60px 5px 15px;
  }
`

export const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  padding-right: 10px;
`

export const Divider = MStyled(MDivider)`
  height: 25px;
  width: 1px;
  margin-right: 5px;
`

export const IconButton = MStyled(MIconButton)`
  
`

export const Icon = MStyled(Search)`
`
