import React, { ChangeEvent } from 'react';
import css from './ToggleSwitch.module.scss';

interface ToggleSwitchProps {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
}
const ToggleSwitch: React.FC<ToggleSwitchProps> = (props: ToggleSwitchProps) => {
    const { onChange, checked } = props;
    return (
        <>
            <input className={css.input} type="checkbox" id="switch" onChange={onChange} checked={checked} />
            <label className={css.label} htmlFor="switch">
                <span>{checked ? 'RTL' : 'LTR'}</span>
            </label>
        </>
    );
};

export default ToggleSwitch;
