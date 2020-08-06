import React, { useCallback, useState, ChangeEvent } from 'react';
import Hamburger from '../Hamburger/Hamburger';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import LinkList from './LinkList/LinkList';
import useRTL, { Direction } from '../../hooks/useRTL';
import css from './NavbarMobile.module.scss';
import Router from 'next/router';
import NAVBAR_LINKS from './navbar.const';

const NavbarMobile: React.FC = () => {
    const [open, setOpen] = useState(false);
    Router.events.on('routeChangeStart', () => setOpen(false));
    const { links } = NAVBAR_LINKS;
    const { setDirection } = useRTL();
    const [isChecked, setIsChecked] = useState(false);
    const handleToggleSwitch = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const { checked } = event.target;
            if (checked) setDirection(Direction.RTL);
            else setDirection(Direction.LTR);
            setIsChecked(!isChecked);
        },
        [isChecked, setDirection],
    );
    return (
        <nav className={`${css.nav} ${open ? css.open : ''}`}>
            <section className={css.header}>
                <Hamburger open={open} setOpen={setOpen} />
            </section>
            <section className={css.content}>
                <LinkList links={links} />
                <span>
                    <ToggleSwitch onChange={handleToggleSwitch} checked={isChecked} textTrue="RTL" textFalse="LTR" />
                </span>
            </section>
        </nav>
    );
};

export default NavbarMobile;
