import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 575px;
  width: 495px;
  border-radius: 15px;
  padding: 50px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: #fff;
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
  text-align: center;
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 300px;
`

export const InputWrapper = styled.div`
  width: 100%;
  margin: 40px 0px;
`

export const HelpText = styled.p`
  margin-top: 20px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const Form = styled.div`
  width: 100%;
`

export const AlertBox = styled.div`
  margin-top: auto;
`
