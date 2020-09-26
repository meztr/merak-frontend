
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'
import { rem } from 'polished'
import { Flex, Box } from 'reflexbox'

function Faytar({ isDark }) {
    return (
        <FaytarStyled>
            <div class="wrapper site-header__wrapper">
                <a href="#" class="brand"><img src="/images/meraklogo.png" alt="brand" /></a>
                <nav class="nav"></nav>
            </div>
        </FaytarStyled>
    )
}

const FaytarStyled = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: yellow;
    
    .site-header__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export default Faytar