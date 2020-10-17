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

  // It’s okay, you don't have to be good. We only care how much you enjoy it

  const SiteName = "SMK Muhammadiyah Sampit";
  const NavbarStyle = tw.nav`container mx-auto px-6 py-3`;

  const UpperBar = tw.div`flex flex-col md:flex-row md:justify-between md:items-center`;
  const BottomBar = tw.div`flex flex-row justify-between lg:justify-center mt-3 py-3 -mx-3 overflow-y-auto whitespace-no-wrap`;

  const MenuButton = styled.div([
    tw`flex`,
    navbarOpen ? tw`md:block` : tw`md:hidden`,
  ]);

  return (
    <>
      <NavbarStyle>
        <UpperBar>
          <div tw="flex justify-between items-center">
            <div tw="flex items-center">
              <Link href="/">
                <a className="text-gray-800 text-xl font-bold lg:text-2xl hover:text-gray-700">
                  {SiteName}
                </a>
              </Link>

              {/* <!-- Search input on desktop screen --> */}
              {/* <div className="mx-10 hidden md:block">
                <input
                  type="text"
                  className="w-32 lg:w-64 px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 border border-transparent focus:outline-none focus:bg-white focus:shadow-outline focus:border-blue-400"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div> */}
            </div>

            {/* <!-- Mobile menu button --> */}
            <MenuButton>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 md:hidden lg:hidden"
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
          <NavItemStyled css={[tw`z-50`, navbarOpen ? tw`block` : tw`hidden`]}>
            <div tw="flex flex-col mt-1 md:flex-row md:mt-0 md:mx-1">
              <div className="dropdown inline-block relative">
                <Link href="/">
                  <a
                    tw="transition duration-300 ease-in-out text-sm text-black font-bold leading-5 py-2 px-4 inline-flex items-center transform hover:-translate-y-1 hover:scale-105"
                    href="/"
                  >
                    <span className="mr-1">Home</span>
                  </a>
                </Link>
              </div>
              {menuItems.map((item) => (
                <div key={item.id} className="dropdown inline-block relative">
                  <a tw="transition duration-300 ease-in-out text-sm text-black font-bold leading-5 py-2 px-4 rounded inline-flex items-center transform hover:-translate-y-1 hover:scale-110">
                    <span className="mr-1">{item.Title}</span>
                    {!!item.sub_navigations.length && (
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                      </svg>
                    )}
                  </a>
                  <ul className="dropdown-menu md:absolute hidden text-black bg-white shadow-lg rounded-lg z-50">
                    {item.sub_navigations.map((subitem) => (
                      <li key={subitem.id} css={tw`list-none`}>
                        <Link href={subitem.slug}>
                          <a
                            css={[
                              tw`text-sm hover:bg-blue-400 py-2 px-4 block whitespace-no-wrap`,
                            ]}
                            href={subitem.slug}
                          >
                            {subitem.title}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex items-center py-2 -mx-1 md:mx-0">
              <Link href="/admisi">
                <a
                  className="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-blue-500 font-medium text-white leading-5 hover:bg-blue-600 md:mx-2 md:w-auto"
                  onClick={() => {
                    navbarOpen && setNavbarOpen(!navbarOpen);
                  }}
                  href="/admisi"
                >
                  Admisi
                </a>
              </Link>
            </div>

            {/* <!-- Search input on mobile screen --> */}
            {/* <div className="mt-3 md:hidden">
              <input
                type="text"
                className="w-full px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline"
                placeholder="Search"
                aria-label="Search"
              />
            </div> */}
          </NavItemStyled>
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
        </BottomBar>
      </NavbarStyle>
    </>
  );
}

const NavItemStyled = styled.div`
  ${tw`md:flex items-center`}
  .dropdown:hover .dropdown-menu {
    display: block;
  }
`;

export default Navbar;
