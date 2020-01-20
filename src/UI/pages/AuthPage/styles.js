import styled from 'styled-components'


export const IsValidTitle = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #249F55;
`;

export const InputsWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 30px;
   margin-bottom: 12px;
`;


export const RestorePinCodeLink = styled.div`
  
  text-align: right;
  margin-bottom: ${(props) => !props.errorMessage ? '61px;' : '25px;'};
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;
  color: #4582B0;
  &:hover {
    cursor: pointer;
  }
  
`;

export const AuthErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;




