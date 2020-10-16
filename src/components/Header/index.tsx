import React from 'react';

import { Container, Logo, Menu } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <Logo>
                <span className="logo">Angeloni</span>
                <span className="profile">adm</span>
            </Logo>

            <Menu>
                <a href="">Gerar CSV</a>
                <a href="">Desempenho</a>
            </Menu>         
        </Container>
    );
};

export default Header;