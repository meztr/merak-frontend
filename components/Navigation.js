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
            <ul className="nav__wrapper">
                {/* Hardcode Beranda nav item */}
                <li key={0}>
                    <Link href="/">
                        <a className={`nav__item ${router.pathname === '/' ? 'active' : ''}`}>Home</a>
                    </Link>
                </li>

                {menuItems.map(item => (
                    <li key={item.id}>
                        <Link href={item.Slug}>
                            <a className={`nav__item ${router.pathname === item.Slug ? 'active' : ''}`}>{item.Title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.div`
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        li {
            margin-left: 20px;
        }
        a {
            text-decoration: none;
            color: ${props => props.color ? '#CDCDCD' : '#FFC600'};
            &:hover {
                color: #FFC600;
            }
            &.active {
                color: ${props => props.color ? '#FFC600' : '#CDCDCD'};
            }
        }
    }
`
export default Navigation