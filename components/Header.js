import styled from '@emotion/styled'
import { rem } from 'polished'
import { Flex, Box } from 'reflexbox'
import Navigation from 'components/Navigation'
import UpNavigation from 'components/UpNavigation'
import Link from 'next/link'

function Header({ isDark, navigation }) {
    return (
        <HeaderStyled isDark={isDark}>
            <Box backgroundColor="#FFC600">
                <Flex
                    justifyContent="flex-start" 
                    alignItems="center"
                    minHeight="32px"
                    variant="container"
                >
                    <UpNavigation />
                </Flex>
            </Box>
            <Box variant="container">
                <Flex 
                    px={2}
                    py={2} 
                    justifyContent="space-between" 
                    alignItems="center"
                    flexDirection={{ _: "column", md: "row" }}
                >
                    <div className="logo">
                        <Link href="/">
                            <a>
                                <img src="/images/meraklogo.png" alt="Merak Site Logo" /> 
                                <span className="logo-text">SMK MUHAMMADIYAH SAMPIT</span>
                            </a>
                        </Link> 
                    </div>                    

                    <Navigation navigation={navigation} />
                </Flex>
            </Box>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    background: ${props => props.isDark ? '#000000' : '#272466' };
    padding; 20px;

    .logo {
        .logo-text {
            margin-left: 8px;
            color: #BDBDBD;
            font-size: ${rem(18)};
            font-weight: bold;
        }

        a {
            display: flex;
            align-items: center;
            text-decoration: none;
        }
    }

    img {
        width: 48px;
        height: 48px;
    }
`

export default Header
