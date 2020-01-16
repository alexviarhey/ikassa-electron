import styled from 'styled-components'



export const RadioButtonsForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  `;

export const RadioInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
   `;

export const RadioButtonsFormBottomBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  align-items: center;
`;


export const RadioButton = styled.input`
  display: none;
`;

export const RadioButtonLabel = styled.label`
  
  &:after {
    content: '${({title}) => title}';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 30px;
    border: 1px solid ${({label, paymentMethod}) => (label === paymentMethod) ? 'rgba(97, 98, 105, 1)' : 'rgba(97, 98, 105, .5)'};
    border-radius: 10px;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: ${({label, paymentMethod}) => (label === paymentMethod) ? 'rgba(97, 98, 105, 1)' : 'rgba(97, 98, 105, .5)'};
  }
  `;

export const TotalMountOuter = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const TotalMountItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid ${({topBlock}) => topBlock ? 'rgba(97, 98, 105, .5)' : '#ffffff'}
`;

export const TotalMountSubtitle = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 19px;
  color: #616269;
`;

export const TotalMountTitle = styled(TotalMountSubtitle)`
  font-weight: 500;
`;

