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
    transition: .3s;
        &:active, &:focus {
            outline: none;
        }
        
        &:hover {
             background: #ffffff;
             transition: .3s;
        }
             
        &:hover div {
            transition: .3s;
            background: linear-gradient(15.66deg, #317D8C 0%, #56B295 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
     }
`;

export const Text = styled.div`
    font-family: Roboto, sans-serif;;
    font-weight: 800;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF
`;