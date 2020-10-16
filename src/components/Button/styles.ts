import styled, { css } from 'styled-components';

interface IButton {
    isActive: boolean;
}

export const Container = styled.button<IButton>`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;

    padding: 10px;

    border: none;
    border-radius: 8px;

    font-size: 18px;
    font-weight: 500px;
    color: var(--text-color-light);
    
    background: var(--primary-color);

    transition: background 0.2s;

    &:hover {
        background: var(--button-color-hover);
    }

    ${(props) =>
        !props.isActive &&
        css`
            background: var(--background-disabled);
            &:hover {
                background: var(--background-disabled);
            }
        `
    }

    img {
        margin-left: 12px;
    }
`;