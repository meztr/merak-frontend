import { useState } from 'react';
import tw, { styled, css } from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faGithub,
    faTwitter
} from 'node_modules/@fortawesome/free-brands-svg-icons/index';
import { faArrowAltCircleDown } from 'node_modules/@fortawesome/free-solid-svg-icons/index';

// const NavItemLink =

// const LogoButton =

function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const NavbarStyle = styled.nav(({ isTransparent }) => [
        isTransparent ? tw`top-0 absolute z-50 w-full` : tw`relative shadow-lg bg-white shadow-lg`,
        css` flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg`
    ]);

    const NavContainer = tw.div`container h-16 px-4 mx-auto flex flex-wrap items-center justify-between `;
    const LeftContent = tw.div`w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start`;
    const Logo = styled.a(({ isTransparent, href }) => [
        isTransparent ? tw`text-white` : tw`text-gray-800`,
        tw`text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase tracking-tight`,
        (href = { href })
    ]);

    const NavItemWrapper = styled.div(({ navbarOpen }) => [
        tw`lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none`,
        navbarOpen ? tw`block rounded shadow-lg` : tw`hidden`
    ]);

    const UlStyle = tw.u`flex flex-col lg:flex-row list-none mr-auto`;
    const LiStyle = tw.i`flex items-center`;

    return (
        <>
            <NavbarStyle isTransparent={props.transparent}>
                <NavContainer>
                    <LeftContent>
                        <Logo isTransparent={props.transparent} href="/">
                            SMK MUHAMMADIYAH SAMPIT
                        </Logo>

                        <button
                            className="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}>
                            <i className={props.transparent ? 'text-white' : 'text-gray-800'}>
                                <FontAwesomeIcon icon={faBars} />
                            </i>
                        </button>
                    </LeftContent>

                    <NavItemWrapper navbarOpen={navbarOpen} id="example-navbar-warning">
                        {/* <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="/admisi"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " far fa-file-alt text-lg leading-lg mr-2"
                    }
                  />{" "}
                  Docs
                </a>
              </li>
            </ul> */}
                        <UlStyle>
                            <LiStyle>
                                <a
                                    className={
                                        (props.transparent
                                            ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                                            : 'text-gray-800 hover:text-gray-600') +
                                        ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                                    }
                                    href="/admisi">
                                    <i
                                        className={
                                            (props.transparent
                                                ? 'lg:text-gray-300 text-gray-500'
                                                : 'text-gray-500') + ' far text-lg leading-lg mr-2'
                                        }>
                                        {' '}
                                        <FontAwesomeIcon icon={faFileAlt} />{' '}
                                    </i>{' '}
                                    Docs
                                </a>
                            </LiStyle>
                        </UlStyle>
                        <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
                            <li className="flex items-center">
                                <a
                                    className={
                                        (props.transparent
                                            ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                                            : 'text-gray-800 hover:text-gray-600') +
                                        ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                                    }
                                    href="#pablo">
                                    <i
                                        className={
                                            (props.transparent
                                                ? 'lg:text-gray-300 text-gray-500'
                                                : 'text-gray-500') + ' fab text-lg leading-lg '
                                        }>
                                        {' '}
                                        <FontAwesomeIcon icon={faFacebook} />{' '}
                                    </i>{' '}
                                    <span className="inline-block ml-2 lg:hidden">Share</span>
                                </a>
                            </li>

                            <li className="flex items-center">
                                <a
                                    className={
                                        (props.transparent
                                            ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                                            : 'text-gray-800 hover:text-gray-600') +
                                        ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                                    }
                                    href="#pablo">
                                    <i
                                        className={
                                            (props.transparent
                                                ? 'lg:text-gray-300 text-gray-500'
                                                : 'text-gray-500') + ' fab text-lg leading-lg '
                                        }>
                                        {' '}
                                        <FontAwesomeIcon icon={faTwitter} />{' '}
                                    </i>{' '}
                                    <span className="inline-block ml-2 lg:hidden">Tweet</span>
                                </a>
                            </li>

                            <li className="flex items-center">
                                <a
                                    className={
                                        (props.transparent
                                            ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                                            : 'text-gray-800 hover:text-gray-600') +
                                        ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                                    }
                                    href="#pablo">
                                    <i
                                        className={
                                            (props.transparent
                                                ? 'lg:text-gray-300 text-gray-500'
                                                : 'text-gray-500') + ' fab text-lg leading-lg '
                                        }>
                                        {' '}
                                        <FontAwesomeIcon icon={faGithub} />{' '}
                                    </i>{' '}
                                    <span className="inline-block ml-2 lg:hidden">Star</span>
                                </a>
                            </li>

                            <li className="flex items-center">
                                <button
                                    className={
                                        (props.transparent
                                            ? 'bg-white text-gray-800 active:bg-gray-100'
                                            : 'bg-pink-500 text-white active:bg-pink-600') +
                                        ' text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                                    }
                                    type="button"
                                    style={{ transition: 'all .15s ease' }}>
                                    {/* <i className="fas fa-arrow-alt-circle-down"></i> Download */}
                                    <FontAwesomeIcon icon={faArrowAltCircleDown} /> Download
                                </button>
                            </li>
                        </ul>
                    </NavItemWrapper>
                </NavContainer>
            </NavbarStyle>
        </>
    );
}

export default Navbar;
