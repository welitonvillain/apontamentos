import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    height: 100%;
    padding: 40px 10px;

    span {
        display: flex;
        align-items: center;
        margin-bottom: 50px;

        color: var(--text-color-dark);

        font-weight: 700;
        font-size: 32px;
    }

    .input-div {
        width: 100%;

        div + div {
            margin-top: 12px;
        }
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    height: 60px;
    width: 100%;

    margin-top: 60px;

    a {
        height: 100%;
        width: 100%;
        text-decoration: none;
    }
`;