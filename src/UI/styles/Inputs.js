import styled from 'styled-components'

export const Input = styled.input`
  width: 341px;
  height: 30px;
  border: 1px solid #C4C4C4;
  border-radius: 10px;
  font-family: Roboto,sans-serif;
  font-size: 14px;
  line-height: 19px;
  color: #616269;
  text-align: center;
  transition: .5s;
  &:active, &:focus {
    outline: none;
  }
  &:focus::placeholder {
    opacity: 0;
    transition: .5s;
  }
  &:focus {
    border: 1px solid #616269;
    transition: .5s;
  }
   
  &::placeholder {
    color: #C4C4C4;
    transition: .5s;
  }
`;

export const AuthInput  = styled(Input)`
   width: 325px;
   height: 40px;
`;

export const NewPinCodeInput = styled(Input)`
   width: 155px;
   height: 40px;
`;

