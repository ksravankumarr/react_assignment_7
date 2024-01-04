import styled from 'styled-components'

export const LoginFormCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: '#ffffff';
`

export const FormCont = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: #fefeff;
  box-shadow: 0px 8px 40px 0px rgba(7, 7, 7, 0.08);
  width: 360px;
  flex-shrink: 0;
  background-color: '#ffffff';
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 68px;
`

export const Logo = styled.img`
  width: 140px;
  height: 35px;
  flex-shrink: 0;
  margin-top: 60px;
  margin-bottom: 28px;
  align-self: center;
`

export const InputCont = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputLabel = styled.label`
  color: #94a3b8;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 8px;
  font-family: 'Roboto';
  margin-top: 24px;
`
export const Input = styled.input`
  border-radius: 2px;
  width: 100%;
  color: #616e7c;
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border: 2px solid #e2e8f0;
  outline: none;
  font-family: 'Roboto';
`

export const CheckboxCont = styled.div`
  display: flex;
  margin-top: 15px;
`
export const CheckboxInput = styled.input`
  margin-right: 8px;
  width: 16px;
`

export const CheckboxLabel = styled.label`
  color: #181818;
  font-family: 'Roboto'
  font-size: 14px;
  font-weight: 500;
`

export const LoginBtn = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  font-family: 'Roboto'
  width: 312px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 8px;
  border: none;
  outline: none;
  margin-bottom: 8px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; 
  margin-top: 24px;
`

export const Error = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
