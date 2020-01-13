import styled from 'styled-components'


export const RestorePinCodeOuter = styled.div`
  margin: 0 auto;
  background: rgba(0,0,0,0.2);
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PukInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

export const  PinInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({errorMessage}) => !errorMessage ? '46px' : '15px'}
`;

