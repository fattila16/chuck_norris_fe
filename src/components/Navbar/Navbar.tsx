import React, { useCallback, ChangeEvent, useState } from 'react';
import LinkList, { NavLink } from './LinkList/LinkList';
import css from './Navbar.module.scss';
import NAVBAR_LINKS from './navbar.const';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import useRTL, { Direction } from '../../hooks/useRTL';
export interface NavbarProps {
    logo: string;
    links: NavLink[];
}
const Navbar: React.FC = () => {
    const { links } = NAVBAR_LINKS;
    const { setDirection } = useRTL();
    const [isChecked, setIsChecked] = useState(false);
    const handleToggleSwitch = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const { checked } = event.target;
            console.log(checked);
            if (checked) setDirection(Direction.RTL);
            else setDirection(Direction.LTR);
            setIsChecked(!isChecked);
        },
        [isChecked, setDirection],
    );
    return (
        <>
            <nav className={css.nav}>
                <section>
                    <LinkList links={links} />
                </section>
                <section>
                    <ToggleSwitch onChange={handleToggleSwitch} checked={isChecked} />
                </section>
            </nav>
        </>
    );
};

export default Navbar;
