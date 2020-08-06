import React, { ChangeEvent } from 'react';
import css from './ToggleSwitch.module.scss';

interface ToggleSwitchProps {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
    textTrue?: string;
    textFalse?: string;
}
const ToggleSwitch: React.FC<ToggleSwitchProps> = (props: ToggleSwitchProps) => {
    const { onChange, checked, textFalse, textTrue } = props;
    return (
        <>
            <input className={css.input} type="checkbox" id="switch" onChange={onChange} checked={checked} />
            <label className={css.label} htmlFor="switch">
                <span>{checked ? textTrue : textFalse}</span>
            </label>
        </>
    );
};

export default ToggleSwitch;
