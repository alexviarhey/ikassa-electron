import styled from 'styled-components'


export const HeaderWrapper = styled.div`
    width: 800px;
    height: 60px;
    background: linear-gradient(15.66deg, #317D8C 0%, #56B295 100%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;


export const TokenNumber = styled.div`
    font-family: Roboto, sans-serif;;
    margin-left: 60px;
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    color: #FFFFFF;
`;

export const UpdateInfoButton = styled.button`
    width: 200px;
    height: 30px;
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    background: none;
    transition: .5s;
        &:active, &:focus {
            outline: none;
        }
        
        &:hover {
             background: #ffffff;
             transition: .5s;
        }
               
        & div:after {
          content: 'Обновить информацию';
          font-family: Roboto, sans-serif;;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(15.66deg, #317D8C 0%, #56B295 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 0;
        }
             
        &:hover div:after {
            opacity: 1;
            transition: .5s;
        }
    `;

export const Text = styled.div`
    position: relative;
    z-index: 1;
    font-family: Roboto, sans-serif;;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    background: white;
    -webkit-background-clip: text;
    -webkit-text-fill-color: white;
    transition: .5s;
`;