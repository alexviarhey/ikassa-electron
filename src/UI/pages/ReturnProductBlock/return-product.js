import styled from 'styled-components'

export const Text = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #616269;
  margin-bottom: 5px;
  margin-left: 5px;
`;

export const SmallText = styled(Text)`
  font-family: Roboto, sans-serif;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #616269;
  opacity: 0.75;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
`;

export const OuterContainer = styled(Container)`
  margin: 0;
`;

export const ContainerRow = styled.div`
  display: flex;
  justify-content: space-between;
 `;

export const ReturnSumContainer = styled.div`
  margin-top: 35px;
`;

