import styled from "styled-components";


export const ButtonBasic = styled.button`
  width: 240px;
  height: 50px;
  background: ${props => props.isDisabled ? '#688398' : '#4582B0'};
  border: none;
  border-radius: 2px;
  font-family: Roboto,sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: ${props => props.isDisabled ? '#bac1c2' : 'white'};
  transition: .3s;
 
    
  &:hover {
    background: ${props => props.isDisabled ? '#688398' : '#4092CF;'};
    transition: .3s;
    cursor: ${props => props.isDisabled ? 'auto' : 'pointer'};
  }
  
  &:active, &:focus {
    outline: none;
  }
`;

export const CashButton = styled(ButtonBasic)`
  width: 150px;
  height: 40px;
`;

export const SettingsButton = styled(ButtonBasic)`
  width: 300px;
  height: 40px;
  margin-bottom: 10px;
`;

export const XReportButton = styled(ButtonBasic)`
  width: 340px;
  height: 50px;
  font-size: 21px;
  line-height: 25px;
`;

export const ShiftButton = styled(ButtonBasic)`
  width: 340px;
  height: 75px;
  font-size: 21px;
  line-height: 25px;
  background: ${props => props.isShiftOpen ? '#249F55' : '#DA2B2B'};
  &:hover {
    background: ${props => props.isShiftOpen ? '#2BB762' : '#f21f1f'};
    }
 `;

export const PaymentButton = styled(ButtonBasic)`
  width: 250px;
  height: 55px;
  font-size: 21px;
  line-height: 25px;
  background: #249F55;
  &:hover {
    background: #2BB762;
    }
`;

export const ReturnButton = styled(PaymentButton)`
  width: 290px;
  height: 75px;
`;

export const PrintOutButton = styled(PaymentButton)`
  width: 500px;
  height: 50px;
  
`;

