import styled from '@emotion/styled';
import HeaderContext from '../contexts/HeaderContext';
import { useContext } from 'react';

function ToggleNavigationColorButton() {
    const { color, toggleColor } = useContext(HeaderContext);

    return <ButtonStyled onClick={() => toggleColor(!color)}>Toggle</ButtonStyled>;
}

const ButtonStyled = styled.button`
    color: #cacaca;
`;

export default ToggleNavigationColorButton;
