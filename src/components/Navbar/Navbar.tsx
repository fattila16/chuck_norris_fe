import React from 'react';
import NavbarDefault from './NavbarDefault';
import NavbarMobile from './NavbarMobile';
import css from './Navbar.module.scss';

const Navbar: React.FC = () => {
    return (
        <>
            <div className={css.default}>
                <NavbarDefault />
            </div>
            <div className={css.mobile}>
                <NavbarMobile />
            </div>
        </>
    );
};

export default Navbar;
