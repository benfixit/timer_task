import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Button = styled.button`
    width: fit-content;
    color: #ffffff;
    padding: 10px 15px;
    border: none;
    background-color: #61AF87;
    border-radius: 3px;
    cursor: pointer;

    :active,
    :focus{
        outline: none;
    }

    :hover{
        background-color: #509E76;
    }
`;