import React, { ChangeEvent } from 'react';
import css from './SearchBar.module.scss';

interface InputProps {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    placeHolder?: string;
}
const SearchBar: React.FC<InputProps> = (props: InputProps) => {
    const { onChange, value, placeHolder } = props;
    return (
        <>
            <input className={css.input} type="text" onChange={onChange} value={value} placeholder={placeHolder} />
        </>
    );
};

export default SearchBar;
