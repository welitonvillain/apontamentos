import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;

    margin-top: 100px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    width: 100%;
`;

export const Filter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    span {
        display: flex;
        align-items: center;
        margin: 0 8px;

        font-weight: 500;
        font-size: 14px;
    }

    .div-usuário {
        display: flex;
        height: 100%;
        width: 350px;
    }
    
    .div-periodo {
        display: flex;
        justify-content: space-between;

        height: 100%;
        width: 368px;

        .periodo {
            width: 126px;
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 8px;

        height: 30px;
        width: 100px;

        border: none;
        border-radius: 8px;

        color: var(--text-color-light);
        font-weight: 500;

        background: var(--primary-color);

        transition: background 0.2s;

        &:hover {
            background: var(--button-color-hover);
        }
    }
`;

export const File = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 180px;
    width: 100%;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        width: 260px;
        padding: 10px;

        border-radius: 8px;

        background: var(--color-disabled);

        img {
            margin-right: 12px;
        }

        span {
            font-weight: 500;
            color: var(--text-color-dark);
        }
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    height: 60px;
    width: 180px;

    a {
        height: 100%;
        width: 100%;
        text-decoration: none;
    }
`;