import styled from '@emotion/styled'

const HaydarStlyed = styled.header `
    .logo {
        padding-right: 0.75rem;
    }

    .brand {
        font-weight: bold;
        font-size: 24px;   
    }

    .site-header__top {
        // background-color: #def7ff;
        background-color: #ededed; 
    }

    .site-header__middle {
        padding-left: 0.7rem;
        padding-top: 0.15rem;
        padding-bottom: 0.15rem; 
    }

    .site-header__bottom {
        position: relative;
        // background-color: #c7f2ff;

        background-color: #273b72;
        // background-color: #2B448C;
        // background-color: #272466;
        // background-color: #FFC600; 
        border-bottom: 1px solid #303442;
    }

    .site-header__top ul {
        display: flex; 
    }

    .site-header__top li:not(:last-child) {
        margin-right: 1.5rem; 
    }

    .site-header__top .site-header__start {
        display: none; 
    }
    
    @media (max-width: 939px) {
        .site-header__bottom 
        .site-header__end {
            order: -1; 
            visibility: hidden;
        }
    }
    
    .site-header__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem; 
    }

    .site-header__start {
        a {
            color: #efefef;
            font-weight: bold;
            font-size: 0.96rem;
        }
    }

    .site-header__end {
        display: flex;
        align-items: center; 
        padding-right: 0.7rem;
        a {
            color: #efefef;
            font-weight: bold;
            font-size: 0.96rem;
        }
    }

    @media (min-width: 940px) {
        .site-header__wrapper {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem; 
        } 
    }

    .site-header__end.top > * + * {
        margin-left: 1.5rem; 
    }
    
    @media (min-width: 940px) {
        .site-header__end.bottom > *:not(:last-child) {
            margin-right: 1.5rem; 
        } 
    }
    
    @media (max-width: 939px) {
        .site-header__end.bottom .cart {
            margin-right: 1.5rem; 
        }
         
    }
    
    @media (max-width: 939px) {
        .site-header__end.bottom .search {
            margin-left: 0; 
        } 
    }
    
    .site-header__end.top svg {
        width: 22px;
        height: 22px; 
    }
    
    @media (min-width: 940px) {
        .nav__wrapper {
            display: flex; 
        } 
    }
    
    @media (max-width: 939px) {
        .nav__wrapper {
            position: absolute;
            top: 100%;
            right: 0;
            left: 0;
            z-index: -1;
            background-color: #d9f0f7;
            visibility: hidden;
            opacity: 0;
            transform: translateY(-100%);
            transition: transform 0.3s ease-out, opacity 0.3s ease-out; 
        }
        .nav__wrapper.active {
            visibility: visible;
            opacity: 1;
            transform: translateY(0); 
        } 
    }

    @media (max-width: 700px) {
        .top {
            display: none;
        }
        .logo {
            display: none;
        }
        .brand {
            font-size: 22px;
        }
    }

    @media (max-width: 400px) {
        .brand {
            font-size: 18px;
        }
    }
    
    .nav__item:not(:last-child) {
        margin-right: 1.5rem; 
    }
    
    .nav {
        padding-left: 1rem;
    }

    .nav__item a {
        display: block;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem; 
    }
    
    @media (max-width: 939px) {
        .nav__item a {
            padding: 1rem; 
            text-decoration: none;
        } 
    }

    .nav__item svg {
        display: inline-block;
        vertical-align: middle;
        width: 28px;
        height: 28px;
        margin-right: 1rem; }
        @media (min-width: 940px) {
        .nav__item svg {
            display: block;
            margin: 0 auto 0.5rem; } 
    }

    .nav__item.active a {
        border-left-color: #222; }
        @media (min-width: 800px) {
        .nav__item.active a {
            border-bottom-color: #222; } 
    }

    .nav__toggle {
        position: absolute;
        right: 1rem;
        top: 1rem; 
    }
    
    @media (min-width: 940px) {
        .nav__toggle {
            display: none; 
        }
    }

    .search {
        display: flex; 
    }
    
    .search__toggle {
        appearance: none;
        order: 1;
        font-size: 0;
        width: 34px;
        height: 34px;
        background: url("/images/assets/search.svg") center/22px no-repeat;
        border: 0; 
    }
    
    @media (max-width: 939px) {
        .search__toggle {
                // position: absolute;
                right: 5.5rem;
                top: 0.65rem; 
        }
    }
    
    .search__toggle.active {
        background: url("/images/assets/close.svg") center/22px no-repeat; 
    }
    
    .search__form {
        display: none; }
        .search__form.active {
        display: block; 
    }
    @media (max-width: 799px) {
        .search__form {
            position: absolute;
            left: 0;
            right: 0;
            top: 100%;
            background-color: red; }
            .search__form input {
            width: 100%; } 
    }
    
    .search__form input {
        min-width: 200px;
        appearance: none;
        border: 0;
        background-color: #fff;
        border-radius: 0;
        font-size: 16px;
        padding: 0.5rem; 
    }
    
    @media (max-width: 799px) {
        .search__form input {
        border-bottom: 1px solid #979797; } 
    }
`

export default HaydarStlyed