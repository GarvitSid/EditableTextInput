import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #f5d0fe;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`

export const CardContainer = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 16px 0px #cbd2d9;
`

export const Heading = styled.h1`
  color: #000000;
  font-size: 24px;
  margin-bottom: 25px;
  font-weight: bold;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`

export const InputElement = styled.input`
  height: 36px;
  border: 1px solid #cbd2d9;
  border-radius: 4px;
  padding-left: 10px;
  color: #323f4b;
  font-size: 14px;
  margin-right: 15px;
  outline: none;
`

export const ParagraphText = styled.p`
  color: #323f4b;
  font-size: 16px;
  margin-right: 20px;
  font-weight: 500;
`

export const Button = styled.button`
  background-color: #d946ef;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  height: 36px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 14px;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
  font-weight: 500;
`
