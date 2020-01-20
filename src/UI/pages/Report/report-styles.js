import styled from 'styled-components'

export const ReportItemsOuter = styled.div`
  margin-top: 15px;
  height: 335px;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export const ReportItemWrapper = styled.div`
  display: flex;
  padding: 5px 10px;
  border-bottom: 1px solid rgba(97, 98, 105, .5);;
 `;


export const ReportTitle = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: #616269;
  flex-basis: 78%;
  `;

export const ReportValue = styled(ReportTitle)`
  font-weight: 500;
  flex-basis: 20%;
  margin: 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`