import styled from 'styled-components'


export const Title = styled.div`
   font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding-bottom: 10px;
   border-bottom: 1px solid ${props => props.green ? '#249F55' : props.red ? ' #DA2B2B' : '#317D8C'};
  color: ${props => props.green ? '#249F55' : props.red ? ' #DA2B2B' : '#317D8C'}
`;

export const SimpleTitle = styled(Title)`
  font-weight: normal;
  color: #616269;
  padding: 0;
  border: none;
`;

export const BoldSimpleTitle = styled(SimpleTitle)`
  font-weight: 500;
  display: flex;
  flex-direction: column;
 `;


export const SmallTitle = styled(Title)`
  font-weight: normal;
  color: #616269;
  font-size: 14px;
  line-height: 16px;
  padding: 0;
  border: none;
`;




