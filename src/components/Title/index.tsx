import React from 'react';

import { Container } from './styles';

interface ITitle {
    title: string;
}

const Title: React.FC<ITitle> = ({ title }) => {
    return (
        <Container>
            <h1>{title}</h1>
        </Container>
    );
};

export default Title;