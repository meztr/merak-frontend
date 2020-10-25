import PropTypes from 'prop-types';
import HeaderContext from '../contexts/HeaderContext';
import { useState } from 'react';

function ContextWrapper({ children, navigation, konten }) {
    const [menuItems] = useState(navigation);
    const [contents] = useState(konten);
    const [color, toggleColor] = useState(1); //1 for true warning string

    return (
        <HeaderContext.Provider value={{ menuItems, contents, color, toggleColor }}>
            {children}
        </HeaderContext.Provider>
    );
}

ContextWrapper.propTypes = {
    children: PropTypes.any,
    navigation: PropTypes.string,
    konten: PropTypes.string
};

export default ContextWrapper;
