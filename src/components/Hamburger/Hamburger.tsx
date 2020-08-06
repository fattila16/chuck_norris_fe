import React from 'react';
import css from './Hamburger.module.scss';

interface HamburgerProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const Hamburger: React.FC<HamburgerProps> = (props: HamburgerProps) => {
    const { open, setOpen } = props;
    return (
        <div
            onClick={(): void => setOpen(!open)}
            onKeyPress={(): void => setOpen(!open)}
            className={`${css.hamburger} ${open ? css.open : ''}`}
            role="menu"
            tabIndex={0}
        >
            <span />
            <span />
            <span />
        </div>
    );
};

export default Hamburger;
