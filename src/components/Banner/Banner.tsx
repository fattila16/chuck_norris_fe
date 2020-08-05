import React from 'react';
import css from './Banner.module.scss';

const Banner: React.FC = () => {
    return (
        <a href="/" className={css.container}>
            <img src="/images/chuck_logo.png" alt="chuck_banner" />
            <h1>Chuck Norris Random Facts</h1>
        </a>
    );
};

export default Banner;
