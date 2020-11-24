// import { jsx, css } from '@emotion/core'
// import { rem } from 'polished'
// import { Flex, Box } from 'reflexbox'
import HaydarStyled from './HaydarStyled';
// import Link from "next/link";
import Navigation from 'components/Navigation';
/**
 *
 * TODO:
 * 1. Need to refactor :
 * * a. Top Header :
 * *        a.1. Start Top Header
 * *        a.2. Middle Top Header
 * *        a.3. End Top Header
 * *
 * * b. Bottom Header
 */

function Haydar() {
    return (
        <HaydarStyled>
            {/* top header */}
            <div className="site-header__top">
                <div className="wrapper site-header__wrapper">
                    <div className="site-header__start">
                        <ul className="">
                            <li className="">
                                <a href="#">About</a>
                            </li>
                            <li className="">
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="site-header__middle">
                        <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                className="logo"
                                style={{ height: '56px', width: '56px' }}
                                src="/images/logo192.png"
                                alt="Merak Site Logo"
                            />
                            <span className="brand">SMK MUHAMMADIYAH SAMPIT</span>
                        </a>
                    </div>
                    <div className="site-header__end top">
                        <div className="search">
                            <button className="search__toggle" arial-aria-label="Open search">
                                Search
                            </button>
                            <form className="search__form" action="">
                                <label className="sr-only" htmlFor="search">
                                    Search
                                </label>
                                <input
                                    type="search"
                                    name=""
                                    id="search"
                                    placeholder="What's on your mind?"
                                />
                            </form>
                        </div>
                        <a href="#">
                            <svg
                                version="1.1"
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg">
                                <title>Profile</title>
                                <path d="m65.57 52.5c6.9336-4.5078 11.574-11.797 12.723-19.988 1.1484-8.1875-1.3047-16.473-6.7344-22.715-5.4258-6.2422-13.289-9.8242-21.559-9.8242s-16.133 3.582-21.559 9.8242c-5.4297 6.2422-7.8828 14.527-6.7344 22.715 1.1484 8.1914 5.7891 15.48 12.723 19.988-10.012 3.2812-18.73 9.6406-24.914 18.172-6.1836 8.5273-9.5117 18.793-9.5156 29.328h7.1445c0-15.312 8.168-29.461 21.426-37.117 13.262-7.6523 29.598-7.6523 42.859 0 13.258 7.6562 21.426 21.805 21.426 37.117h7.1445c-0.003906-10.535-3.332-20.801-9.5156-29.328-6.1836-8.5312-14.902-14.891-24.914-18.172zm-37-23.93c0-5.6836 2.2578-11.133 6.2773-15.152 4.0195-4.0156 9.4688-6.2734 15.152-6.2734s11.133 2.2578 15.152 6.2734c4.0195 4.0195 6.2773 9.4688 6.2773 15.152 0 5.6836-2.2578 11.137-6.2773 15.152-4.0195 4.0195-9.4688 6.2773-15.152 6.2773s-11.133-2.2578-15.152-6.2773c-4.0195-4.0156-6.2773-9.4688-6.2773-15.152z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* bottom header */}
            <div className="site-header__bottom">
                <div className="wrapper site-header__wrapper">
                    <div className="site-header__start">
                        <nav className="nav">
                            <button className="nav__toggle" aria-expanded="false" type="button">
                                menu
                            </button>
                            <Navigation />
                        </nav>
                    </div>
                    <div className="site-header__end bottom">
                        <a href="/kerjasama">Partnership</a>
                        <a href="/admisi" className="button">
                            Admisi
                        </a>
                    </div>
                </div>
            </div>
        </HaydarStyled>
    );
}

export default Haydar;
