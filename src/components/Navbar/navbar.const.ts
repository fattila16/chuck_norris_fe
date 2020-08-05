import { NavbarProps } from './Navbar';

export const NAVBAR_LINKS: NavbarProps = {
    logo: '/',
    links: [
        {
            name: 'Categories',
            href: '/categories',
        },
        {
            name: 'Search',
            href: '/search',
        },
    ],
};

export default NAVBAR_LINKS;
