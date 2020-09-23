import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Navigation({ navigation }) {
    const router = useRouter()
    
    return (
        <NavigationStyled>
            <nav className="menu">
                <ul>
                    {/* Hardcode Beranda nav item */}
                    <li key={0}>
                        <Link href="/">
                            <a className={router.pathname === '/' ? 'active' : '' }>Beranda</a>
                        </Link>
                    </li>

                    {navigation.map(item => (
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
            color: #CDCDCD;
            &:hover {
                text-decoration: underline;
            }
            &.active {
                color: #FFC600;
            }
        }
    }
`
export default Navigation