import styled from '@emotion/styled';

export const FormContainer = styled.form`
    padding: 40px 20px;
`;
export const Label = styled.label`
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    text-align: start;
    border-radius: 5px;
    margin: 0 auto 15px auto;
`;
export const Input = styled.input`
    padding: 8px 12px;
    margin-top: 8px;
    font-size: 16px;
    border-radius: 5px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);

    &:hover,
    &:focus {
        border-color: blue;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);

    } 
`;
export const Btn = styled.button`
    font-size: 16px;
    padding: 5px 15px;
    color: white;
    background-color: blue;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 5px;
    outline: none;
    transition: all 300ms ease-in-out;
    
    &:hover,
    &:focus {
        transform: scale(1.15);
        background-color: orange; 
    }
`
