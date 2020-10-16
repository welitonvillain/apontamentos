import React, { InputHTMLAttributes, useState, useCallback, useRef, useEffect } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, [])

    const handleInputBlur = useCallback(() => {
        setIsFocused(false)
    
        setIsFilled(!!inputRef.current?.value);
    }, []);

    return (
        <Container isFilled={isFilled} isFocused={isFocused}>
            { icon && <img src={icon} alt=""/> }

            <input 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                ref={inputRef}

                {...rest}
            />
        </Container>
    );
};

export default Input;