import HeaderContext from '../contexts/HeaderContext'
import { useState } from 'react'

function ContextWrapper({ children, navigation }) {
    const [menuItems] = useState(navigation)
    const [color, toggleColor] = useState(1) //1 for true warning string

    return (
        <HeaderContext.Provider value={{menuItems, color, toggleColor}}>
            {children}
        </HeaderContext.Provider>
    )
}

export default ContextWrapper