import styled from 'styled-components'

export const CheckListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(97, 98, 105, .5);
  margin-top: 10px;   
`;

export const CheckListItem = styled.div`
  display: flex;
  padding: 7px 0;
  border-bottom: 1px solid rgba(97, 98, 105, .5);
  background: ${({isFinded}) => isFinded ? 'rgba(36, 159, 85, .7)' : '#ffffff'};
 `;
export const ItemBlock = styled.div`
  display: flex;
  width: 33.3333%;
  justify-content: center;
 `;

export const ItemCenterBlock = styled(ItemBlock)`
    justify-content: center;
   border-left: 1px solid rgba(97, 98, 105, .5);
   border-right: 1px solid rgba(97, 98, 105, .5);
 `;

export const CheckListItemText = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: ${({isFinded}) => isFinded ? '#ffffff' : '#616269'};
  border-radius: 20px;
 `;

export const Icon = styled.div`
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;



