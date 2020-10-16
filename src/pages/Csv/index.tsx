import React, { useState, useCallback, useEffect } from 'react';
import { debounce } from 'lodash';

import api from '../../services/api';

import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';

import IconDownload from '../../assets/download-icon.svg';
import IconFile from '../../assets/file-icon.svg';

import { initInterval } from '../../util/date';

import { Container, Content, Filter, File, ButtonContainer } from './styles';

interface IInterval {
    initial_date: string;
    final_date: string;
}

interface IUser {
    code: number;
    name: string;
}

const CSV: React.FC = () => {
    const [file, setFile] = useState(false);
    const [interval, setInterval] = useState<IInterval>(initInterval());
    const [user, setUser] = useState('');
    const [nameFile, setNameFile] = useState('performance');
    const [usersList, setUsersList] = useState<IUser[]>([]);

    useEffect(() => {
        async function getUsers() {
            const response = await api.get('/users');

            if (response.status === 200) {
                setUsersList(response.data);
            }
        }
        
        getUsers();
    }, []);

    const handleGenerateFile = useCallback(async () => {
        const url = user === '' 
            ? '/performance' 
            : `/performance/${
                usersList.map(u => { if (u.name === user) return u.code })
            }`;
        
        const response = await api.get(url, {
            params: {
                initial_date: interval.initial_date,
                final_date: interval.final_date,
            },
        });

        if (response.status === 200) {
            user !== '' && setNameFile(`performance-${user}`);

            setFile(true);
        }
    }, []);

    const handleChangeInterval = useCallback((name: string, value: string) => {
        if (name === 'initial') {
            interval.initial_date = new Date(value).toISOString();
        }

        if (name === 'final') {
            interval.final_date = new Date(value).toISOString();
        }

        setInterval(interval);
    }, []);

    const handleChooseUser = useCallback((user: string) => {
        setUser(user);
    }, []);

    const debounced = debounce(
        (value: string) => handleChooseUser(value), 500
    );

    return (
        <Container>
            <Title title="Gerar arquivo CSV"/>
            <Content>
                <Filter>
                    <div className="div-usuário">
                        <span>Usuário:</span>
                        <Input  
                            onChange={e => debounced(e.target.value)} 
                            list="list" 
                            className="user-input" 
                            name="username"
                        />
                        <datalist id="list" >
                            {
                                usersList.map(user => 
                                    <option value={user.name}/>
                                )
                            }
                        </datalist>
                    </div>
                     
                    <div className="div-periodo">
                        <span>Período:</span>
                        <Input 
                            onChange={e => handleChangeInterval('initial', e.target.value)} 
                            type="date" 
                            className="periodo" 
                            name="initial"
                        />
                        <span>até</span>
                        <Input
                            onChange={e => handleChangeInterval('final', e.target.value)} 
                            type="date" 
                            className="periodo" 
                            name="final"
                        />
                    </div>

                    <button onClick={handleGenerateFile}>Gerar</button>
                </Filter>

                <File>
                    <div>
                        {
                            !file &&
                            <span>Nenhum arquivo disponível</span>
                        }

                        {
                            file && 
                            <>
                                <img src={IconFile} alt="file-download"/>
                                <span>nome_arquivo.csv</span>
                            </>
                        } 
                    </div>
                </File>

                <ButtonContainer>
                    <a href={`caminho_do_arquivo`} download={nameFile}>
                        <Button active={file} name="Download" icon={IconDownload} />
                    </a>
                </ButtonContainer>
            </Content>
        </Container>
    );
};

export default CSV;