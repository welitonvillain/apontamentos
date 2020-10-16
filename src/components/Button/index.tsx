import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
    name: string;
    icon?: string;
    active: boolean;
}

const Button: React.FC<ButtonProps> = ({ name, icon, active, ...rest }) => {
    return (
        <Container isActive={active} >
            {name}
            {
                !!icon && <img src={icon} alt={name}/>
            }
        </Container>
    );
};

export default Button;