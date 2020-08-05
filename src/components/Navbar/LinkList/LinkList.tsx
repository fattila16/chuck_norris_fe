import React from 'react';
import Link from 'next/link';
import css from './LinkList.module.scss';

export interface NavLink {
    name: string;
    href: string;
}

interface LinkListProps {
    links: NavLink[];
}

const LinkList: React.FC<LinkListProps> = ({ links }) => {
    return (
        <ul className={css.ul}>
            {links.map((link) => (
                <li key={link.href}>
                    <Link href={link.href}>
                        <a href={link.href}>{link.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default LinkList;
