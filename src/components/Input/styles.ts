import styled, { css } from 'styled-components';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    width: 100%;

    border: 2px solid var(--text-color-dark);
    border-radius: 8px;

    background: #fff;

    transition: all 0.2s;

    img {
        height: 20px;
        width: 20px;
        margin: 6px;
    }

    &:hover {
        border-color: var(--primary-color);

        img {
                filter: invert(39%) sepia(88%) saturate(633%) 
                        hue-rotate(189deg) brightness(89%) contrast(94%);
            }
    }

    ${(props) =>
        props.isFocused &&
        css`
            border-color: var(--primary-color);
            ::-webkit-datetime-edit {
                color: var(--text-color-dark);
            }

            img {
                filter: invert(39%) sepia(88%) saturate(633%) 
                        hue-rotate(189deg) brightness(89%) contrast(94%);
            }
        `
    }


    ${(props) =>
        props.isFilled &&
        css`
            border-color: var(--primary-color);
            ::-webkit-datetime-edit {
                color: var(--text-color-dark);
            }
            img {
                filter: invert(39%) sepia(88%) saturate(633%) 
                        hue-rotate(189deg) brightness(89%) contrast(94%);
            }
        `
    }

    input {
        flex: 1;
        padding: 0 8px;

        border: none;
        border-radius: 8px;

        font-size: 14px;
        color: var(--text-color-dark);

        transition: border-color 0.2s;

        ::-webkit-calendar-picker-indicator {
            display: none;
            -webkit-appearance: none;
        }

        ::-webkit-datetime-edit {
            color: #ccc;
        }
    }
`;