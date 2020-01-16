import styled from 'styled-components'


export const SearchBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
 `;

export const ProductListWrapper = styled.div`
   display: flex;
   flex-direction: column;
   height: 120px;
   overflow: auto;
   border-top: 1px solid rgba(97, 98, 105, .5);
`;

export const ProductListItem = styled.div`
   display: flex;
   /*border-top: 1px solid rgba(97, 98, 105, .5);*/
   border-bottom: 1px solid rgba(97, 98, 105, .5);
   padding: 5px 0;
   background: ${({isFound}) => isFound ? 'rgba(36, 159, 85, .7)' : '#ffffff'};
 `;