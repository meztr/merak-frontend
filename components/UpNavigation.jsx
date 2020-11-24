/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

function UpNavigation({ upnavigation }) {
    const router = useRouter();
    // console.log(router)

    return (
        <UpNavigationStyled>
            {/* <ul>
                {navigation.map(item => (
                    <li key={item.id}>
                        <Link href={item.slug}>
                            <a className={router.pathname === item.slug ? 'active' : '' }>{item.title}</a>
                        </Link>
                    </li>
                ))}
            </ul> */}
            <ul>
                <li>
                    <Link href="/ppdb">
                        <a>PPDB</a>
                    </Link>
                </li>
                <li>
                    <Link href="/prodi">
                        <a>BKK</a>
                    </Link>
                </li>
                <li>
                    <Link href="/berita">
                        <a>HUMAS</a>
                    </Link>
                </li>
            </ul>
        </UpNavigationStyled>
    );
}

const UpNavigationStyled = styled.div`
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
            color: #272466;
            font-size: 14px;
            &:hover {
                text-decoration: underline;
            }
            &.active {
                color: #ef6800;
            }
        }
    }
`;
export default UpNavigation;
