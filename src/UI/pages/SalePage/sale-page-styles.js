import styled from 'styled-components'


export const ProductsCardHeader = styled.div`
  width: 440px;
  height: 40px;
  background: linear-gradient(360deg, #317D8C 0%, #56B295 100%);
  opacity: 0.8;
  padding: 5px 20px;
  display: flex;
  justify-content: space-around;
  
`;

export const HeaderItem = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: #F2FFFD;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
  width: 100%;
`;

export const HeaderItemCenter = styled(HeaderItem)`
  border-left: 1px solid rgba(242, 255, 253, .5);
  border-right: 1px solid rgba(242, 255, 253, .5);
  padding: 9px;
  margin-right: -1px;
`;

export const SalePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

export const SalePageTopBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;




export const ProductsContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 5px;
  height: 120px;
  overflow: auto;
 `;

export const Product = styled(ProductsCardHeader)`
  opacity: 1;
   width: 100%;
   height: 30px;
   background: ${({isSelected}) => isSelected ? 'rgba(86, 178, 149, .15)' : '#FFFFFF'};
   border-bottom: 1px solid rgba(97, 98, 105, .5);
   padding: 0;
   transition: .3s;
`;

export const ProductItemName = styled(HeaderItem)`
    color: ${({isFound}) => isFound ? '#FFFFFF' : '#616269'};
    justify-content: ${({fromList}) => fromList ? 'flex-start': ''};
    margin-left: ${({fromList}) => fromList ? '10px': ''};
    border-right: ${({fromList}) => fromList ? '1px solid rgba(97, 98, 105, .5)': ''};
`;

export const ProductItemNumber = styled(HeaderItemCenter)`
   border-left: 1px solid rgba(97, 98, 105, .5);
   border-right: ;
   color: #616269;
   padding: 0;
   
  `;

export const ProductItemSale = styled(HeaderItemCenter)`
  opacity: 1;
  border-left: 1px solid rgba(97, 98, 105, .5);
  border-right: 1px solid rgba(97, 98, 105, .5);
  color: ${({sale}) => (parseFloat(sale) > 0) ? '#F44A4A' : '#616269'};
  padding: 0;
`;

export const ProductItemAmount = styled(HeaderItem)`
  opacity: 1;
  color: ${({isFound}) => isFound ? '#FFFFFF' : '#616269'};
  justify-content: ${({fromList}) => fromList ? 'flex-end': ''};
   margin-right: ${({fromList}) => fromList ? '10px': ''};
    span {
    flex-shrink: 1;
  }
  `;

export const DeleteIcon = styled.div`
  position: relative;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #F44A4A;
  margin-left: 10px;
  margin-bottom: 2px;
  margin-right: 5px;
  display: ${({isSelected}) => !isSelected ? 'none' : 'block'};
  transition: .3s;
  /*background-image: url("../../../img/close_icon.svg");*/
  
  &:before {
    transform: rotate(45deg);
    content: '';
    position: absolute;
    width: 9px;
    height: .9px;
    background: #F44A4A;
    top: 6px;
    left: 2px;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 9px;
    height: .9px;
    top: 6px;
    right: 2px;
    background: #F44A4A;
    transform: rotate(-45deg);
     }
     
     &:hover {
     cursor: pointer;
     }
`;

export const AddButtonContainer  =styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 20px 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(97, 98, 105, .5);
 `;


export const TotalSaleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;
export const TotalSaleTitle= styled(HeaderItem)`
   color: #616269;
   display: block;
 `;

export const TotalSale = styled.div`
  width: 60px;
  height: 25px;
  border: 1px solid #C4C4C4;
  border-radius: 10px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: #C4C4C4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

