import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'
import { rem } from 'polished'
import { Flex, Box } from 'reflexbox'
import Navigation from 'components/Navigation'
import UpNavigation from 'components/UpNavigation'
import Link from 'next/link'
// import ToggleNavigationColorButton from 'components/ToggleNavigationColorButton'
// import LanguageSwitcher from 'components/LangSwitcher'

function Header({ isDark }) {
    return (
        <HeaderStyled isDark={isDark}>
            {/* Up Header */}
            <Box 
                sx={{
                    display: 'block',
                    '@media screen and (max-width: 64em)': {
                    display: 'none',
                    }
                }}
                backgroundColor="#FFC600"
            >
                <Flex
                    justifyContent="flex-start" 
                    alignItems="center"
                    minHeight="32px"
                    variant="container"
                >
                    <UpNavigation />
                </Flex>
            </Box>

            {/* Main Header */}
            <Box variant="container">
                {/* Flex Main Header  */}
                <Flex 
                    px={2}
                    py={3} 
                    justifyContent="space-between" 
                    alignItems="center"
                >
                    {/* Left Header */}
                    <div className="logo">
                        <Link href="/">
                            <a>
                                <img src="/images/meraklogo.png" alt="Merak Site Logo" /> 
                                <span className="logo-text">SMK MUHAMMADIYAH SAMPIT</span>
                            </a>
                        </Link> 
                    </div>  
                    {/* Center Adjusted Header */}
                    <Box mx='auto' bg='primary'/>

                    {/* Right Header */}
                    <Box
                        sx={{
                            display: 'block',
                            '@media screen and (max-width: 54em)': {
                                display: 'none',
                            }
                        }}
                    >
                         <Navigation />
                    </Box>

                    {/* <LanguageSwitcher /> */}
                    {/* <ToggleNavigationColorButton /> */}
                </Flex>
            </Box>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    background: ${props => props.isDark ? '#000000' : '#272466' };
    padding; 20px;
    min-height: 80px;

    .logo {
        .logo-text {
            margin-left: 8px;
            color: #DDDDDD;
            font-size: ${rem(19)};
            font-weight: bold;
            font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif
        }

        @media only screen and (max-width: 640px) {
            img {
                display: none;
            }
            .logo-text {
                font-size: ${rem(17)};
                margin-left: -20px;
            }
        }

        @media only screen and (max-width: 325px) {
            img {
                display: none;
            }
            .logo-text {
                font-size: ${rem(14)};
                align-content: 'center'
            }
        }

        a {
            display: flex;
            align-items: center;
            text-decoration: none;
        }

        img {
            width: 52px;
            height: 52px;
        }
    }

    @media only screen and (max-width: 400px) {
        min-height: 80px;
    }
`

export default Header
