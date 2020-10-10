import { useState } from "react";
import { css, jsx } from "@emotion/core";
import tw, { styled } from "twin.macro";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import HeaderContext from "../../contexts/HeaderContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faFileAlt } from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebook,
//   faGithub,
//   faTwitter,
// } from "node_modules/@fortawesome/free-brands-svg-icons/index";
// import { faArrowAltCircleDown } from "node_modules/@fortawesome/free-solid-svg-icons/index";

// const NavItemLink =

// const LogoButton =

function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const router = useRouter();
  const { menuItems, contents, color } = useContext(HeaderContext);

  // const shidden = css{{
    // .scroll-hidden::-webkit-scrollbar {
    //   height: 0px;
    //   background: transparent;
    // }
  // }}

  const SiteName = "SMK Muhammadiyah Sampit";
  const NavbarStyle = tw.nav`container mx-auto px-6 py-3`;

  const UpperBar = tw.div`flex flex-col md:flex-row md:justify-between md:items-center`;
  const BottomBar = tw.div`flex flex-row justify-between lg:justify-center mt-3 py-3 -mx-3 overflow-y-auto whitespace-no-wrap`;

  const MenuButton = styled.div([
    tw`flex`,
    navbarOpen ? tw`md:block` : tw`md:hidden`,
  ]);

  const Navbar = styled.div([
    tw`md:flex items-center`,
    navbarOpen ? tw`block` : tw`hidden`,
  ]);

  return (
    <>
      <NavbarStyle>
        <UpperBar>
          <div tw="flex justify-between items-center">
            <div tw="flex items-center">
              <Link href="/">
                <a className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700">
                  {SiteName}
                </a>
              </Link>

              {/* <!-- Search input on desktop screen --> */}
              <div className="mx-10 hidden md:block">
                <input
                  type="text"
                  className="w-32 lg:w-64 px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 border border-transparent focus:outline-none focus:bg-white focus:shadow-outline focus:border-blue-400"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </div>

            {/* <!-- Mobile menu button --> */}
            {/* <StyledButtonComponent isPrimary>TEST</StyledButtonComponent> */}
            <MenuButton>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </MenuButton>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <Navbar>
            <div tw="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
              <li key={0} css={tw`list-none`}>
                <Link href="/">
                  <a
                    css={[
                      tw`my-1 text-sm text-black font-bold leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0 active:text-yellow-400`,
                    ]}
                    onClick={() => {
                      navbarOpen && setNavbarOpen(!navbarOpen);
                    }}
                    href="/"
                  >
                    Home
                  </a>
                </Link>
              </li>
              {menuItems.map((item) => (
                <li key={item.id} css={tw`list-none`}>
                  <Link href={item.Slug}>
                    <a
                      css={[
                        tw`my-1 text-sm text-black font-bold leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0 active:text-yellow-400`,
                      ]}
                      onClick={() => {
                        navbarOpen && setNavbarOpen(!navbarOpen);
                      }}
                      href={item.Slug}
                    >
                      {item.Title}
                    </a>
                  </Link>
                </li>
              ))}
            </div>

            <div className="flex items-center py-2 -mx-1 md:mx-0">
              <Link href="/admisi">
                <a
                  className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-blue-500 font-medium text-white leading-5 hover:bg-blue-600 md:mx-2 md:w-auto"
                  href="/admisi"
                >
                  Admisi
                </a>
              </Link>
            </div>

            {/* <!-- Search input on mobile screen --> */}
            <div className="mt-3 md:hidden">
              <input
                type="text"
                className="w-full px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </Navbar>
        </UpperBar>

        <BottomBar
          css={{
            background: "transparent",
          }}
        >
          {contents.map((content) => (
            <li key={content.id} css={tw`list-none`}>
              <Link href={content.slug}>
                <a
                  css={[
                    tw`text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0`,
                  ]}
                  href={content.slug}
                >
                  {content.title}
                </a>
              </Link>
            </li>
          ))}

          {/* <a
            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            News
          </a>
          <a
            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            Articles
          </a>
          <a
            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            Videos
          </a>
          <a
            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            Tricks
          </a>
          <a
            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            PHP
          </a>
          <a
            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            Laravel
          </a>
          <a
            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            Vue
          </a>
          <a
            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            React
          </a>
          <a
            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            Tailwindcss
          </a>
          <a
            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            Meraki UI
          </a>
          <a
            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            CPP
          </a>
          <a
            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            JavaScript
          </a>
          <a
            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            Ruby
          </a>
          <a
            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            Mysql
          </a>
          <a
            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            Pest
          </a>
          <a
            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            PHPUnit
          </a>
          <a
            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            Netlify
          </a>
          <a
            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            VS Code
          </a>
          <a
            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            PHPStorm
          </a>
          <a
            className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0"
            href="#"
          >
            Sublime
          </a> */}
        </BottomBar>
      </NavbarStyle>
    </>
  );
}

const NavItemStyled = styled.div`
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
      color: ${(props) => (props.color ? "#CDCDCD" : "#FFC600")};
      &:hover {
        color: #ffc600;
      }
      &.active {
        color: ${(props) => (props.color ? "#FFC600" : "#CDCDCD")};
      }
    }
  }
`;

export default Navbar;
