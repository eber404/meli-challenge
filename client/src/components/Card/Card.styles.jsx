import styled from 'styled-components'

import { theme } from '@/styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 330px;
  background-color: #fff;
  border-radius: 25px;
  padding: 15px;
  overflow: hidden;
  height: 460px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 360px) {
    width: 290px;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 280px;
  border: 1px solid #f1f1f1;
  border-radius: 25px;
  overflow: hidden;

  @media (max-width: 360px) {
    width: 260px;
  }
`

export const Image = styled.img`
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  max-width: 90%;
  max-height: 90%;
`

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 5px;
  overflow: hidden;
`

export const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${theme.palette.secondary.main};
  white-space: break-spaces;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const StarsWrapper = styled.div`
  margin-top: 10px;
  margin-right: auto;
`

export const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 10px;
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 5px;
  margin-top: auto;
`

export const Price = styled.p`
  font-size: 16px;
  margin-right: auto;
`
