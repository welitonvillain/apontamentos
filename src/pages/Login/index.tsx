import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';

import Input from '../../components/Input';
import Button from '../../components/Button';

import IconEmail from '../../assets/email-icon.svg';
import IconLocked from '../../assets/locked-icon.svg';
import IconLogin from '../../assets/login-icon.svg';

import { useAuth } from '../../context/AuthContext';

import { Container, Content, ButtonContainer } from './styles';

interface ICredentials {
    email: string;
    password: string; 
}

const Login: React.FC = () => {
    const [credential, setCredentials] = useState<ICredentials>({} as ICredentials);

    const { signIn } = useAuth();

    const handleSetCredentials = useCallback((name: string, data: string) => {
        name === 'email' ? credential.email = data : credential.password = data;

        setCredentials(credential);
    }, []);

    const handleSubmit = useCallback(() => {
        if (!!credential) {
            signIn({ email: credential.email, password: credential.password });
        }

        // TODO DIRECIONAR PARA A TELA PRINCIPAL
    }, []);

    const debounced = debounce(
        (name: string, value: string) => handleSetCredentials(name, value), 500
    );

    return (
        <Container>
            <Content>
                <span>Angeloni</span>

                <div className="input-div">
                    <Input 
                        className="input" 
                        type="email" 
                        icon={IconEmail} 
                        name="email"
                        placeholder="Seu usuário AD"
                        onChange={e => debounced('email', e.target.value)}
                    />
                    <Input 
                        className="input" 
                        type="password" 
                        icon={IconLocked} 
                        name="password"
                        placeholder="Sua senha secreta"
                        onChange={e => debounced('password', e.target.value)}
                    />
                </div>

                <ButtonContainer>
                    <Link to="/csv"> 
                        <Button 
                            name="Login" 
                            icon={IconLogin} 
                            active={true}
                            onClick={handleSubmit}
                        />
                    </Link> 
                </ButtonContainer>
            </Content>
        </Container>
    );
};

export default Login;