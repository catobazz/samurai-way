import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://smax.ru/2985125-big/56706-tarelka-s-printom-ty-moj-kotik-1.jpg" alt="logo"/>
        </header>
    );
};

export default Header;