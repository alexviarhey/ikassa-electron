import styled from 'styled-components'

export const BasicCard = styled.div`
  width: 760px;
  height: 500px;
  background: #FFFFFF;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
 `;

export const CashWrapper = styled(BasicCard)`
  width: 390px;
  height: 201px;
  padding: 20px 25px;
  margin-bottom: 73px;
`;

export const WrapperForShiftBlock = styled(BasicCard)`
  width: 340px;
  height: 275px;
  padding: 20px;
  text-align: center;
`;

export const ShiftWrapper = styled(BasicCard)`
  width: 390px;
  height: 166px;
  padding: 20px;
  text-align: center;
`;

export const ProductCard = styled(BasicCard)`
  width: 440px;
  height: 290px;
`;


export const AuthWrapper = styled(BasicCard)`
  padding: 30px;
`;


export const RestorePinCodeCard = styled.div`
  width: 400px;
  height: 270px;
  background: #F3F3F3;
  padding: 15px 38px 20px;
`;

export const ProductsListCard = styled(BasicCard)`
  width: ${({width}) => width};
  height: ${({height}) => height};
  padding: 15px 20px;
`;

export const PaymentBlockWrapper = styled(BasicCard)`
  width: 760px;
  height: 179px;
  padding: 10px 20px;
`;

export const ReturnProductWrapper = styled(BasicCard)`
  width: 290px;
  height: 375px;
  padding: 15px 20px 0;
`;








