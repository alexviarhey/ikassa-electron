import styled from 'styled-components'

export const FormContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
   margin-bottom: 10px;
`;

export const AddProductForm = styled.div`
  display: flex;
  padding: 5px 0 5px 2px;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid rgba(97, 98, 105, .5)
 `;

export const AddInput = styled.input`
  width: 78%;
  height: 100%;
  background: none;
  border: none;
  border-right: ${({noBorder}) => noBorder ? '0' : '1px solid rgba(97, 98, 105, .5)'};
  outline: none;
  display: inline-block;
  text-align: center;
  font-family: Roboto,sans-serif;
  font-size: 14px;
  color: #616269;
  line-height: 16px;
  transition: .3s;
  
  &:focus::placeholder {
    transition: .3s;
    opacity: 0;
  }
     
  
  &::placeholder {
    color: #C4C4C4;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    transition: .3s;
  }
`;

export const CenterInputsWrapper = styled.div`
   /*border-left: 1px solid rgba(97, 98, 105, .5);
   border-right: 1px solid rgba(97, 98, 105, .5);*/
   color: #616269;
   padding: 0;
   display: flex;
   
`;