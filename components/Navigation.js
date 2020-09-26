import styled from '@emotion/styled'
// import { Link } from '../i18n'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import HeaderContext from '../contexts/HeaderContext'

function Navigation() {
    const router = useRouter()
    const { menuItems, color } = useContext(HeaderContext)
    
    return (
        <NavigationStyled color={color}>
            <nav className="menu">
                <ul>
                    {/* Hardcode Beranda nav item */}
                    <li key={0}>
                        <Link href="/">
                            <a className={router.pathname === '/' ? 'active' : '' }>Beranda</a>
                        </Link>
                    </li>

                    {menuItems.map(item => (
                        <li key={item.id}>
                            <Link href={item.Slug}>
                                <a className={router.pathname === item.Slug ? 'active' : '' }>{item.Title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.div`
    nav {
        visibility: visible;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        li {
            margin-left: 10px;
        }
        a {
            text-decoration: none;
            color: ${props => props.color ? '#CDCDCD' : '#FFC600'};
            font-family: Verdana, Geneva, sans-serif;
            &:hover {
                text-decoration: underline;
            }
            &.active {
                color: ${props => props.color ? '#FFC600' : '#CDCDCD'};
            }
        }
    }
`
export default Navigation