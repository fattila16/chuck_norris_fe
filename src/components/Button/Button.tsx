import React, { MouseEvent } from 'react';
import css from './Button.module.scss';

interface ButtonProps {
    className?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    title?: string;
    size?: 'small' | 'medium' | 'big';
    id?: string;
}
const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { title, onClick, size = 'medium', id, className } = props;
    return (
        <button id={id} className={`${className || ''} ${css.button} ${css[size]}`} onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;
