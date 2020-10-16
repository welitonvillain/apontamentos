import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100px;
    width: 100%;
    padding: 20px;

    position: fixed;
    top: 0;
    left: 0;

    background: var(--background-color);
`;

export const Logo = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-right: auto;

    .logo {
        display: flex;
        align-items: center;
        height: 100%;
        
        font-weight: 700;
        font-size: 28px;

        transition: color 0.2s;

        color: var(--primary-color);

        cursor: pointer;

        &:hover {
            color: var(--text-color-dark);
        }
    }

    .profile {
        display: flex;
        align-items: center;
        
        padding-top: 8px;

        margin-left: 2px;

        font-weight: 700;
        font-size: 14px;

        color: var(--text-color-dark);
    }
`;

export const Menu = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 100%;

    a {
        border-bottom: 2px solid transparent;

        color: var(--text-color-dark);
        font-weight: 500;
        text-decoration: none;

        transition: all 0.2s;

        cursor: pointer;

        &:hover {
            color: var(--primary-color);
            border-bottom-color: var(--primary-color);
        }

        + a {
            margin-left: 20px;
        }
    }
`;