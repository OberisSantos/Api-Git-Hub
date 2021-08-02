import React, { useState } from 'react';
import { Text, View } from 'react-native';

import styled from 'styled-components/native';


export default function App() {
  const [user, setUser] = useState("");
  const [git, setGit] = useState({});


  const BuscarUser = async () => {
    const requisicao = await (await fetch(`https://api.github.com/users/${user}`)).json();
      
      setGit(requisicao);

      
  };

  return (
    <Tela>
      <Header>
        <InputBuscar>
          <Input onChangeText={(usuario) => {setUser(usuario)}} value={user} placeholder="Nome do usuário..." placeholderTextColor="#bdbdbd"/>
          <ButtonBuscar onPress = {BuscarUser}>
            <BtnIcone source={require('./assets/icons8-pesquisar-120.png')} />
          </ButtonBuscar>
        </InputBuscar>
      </Header>
             
      <Destaque>
          <Poster source={{uri: git.avatar_url}} resizeMode="contain"/>
      </Destaque>
      
      
      <Info>
        <Titulo>{git.name}</Titulo>
        <Linha>
          <Conteudos>Localização: {git.location}</Conteudos>
        </Linha>
        <Linha>
          <Conteudos>Companhia: {git.company}</Conteudos>
        </Linha>
        <Linha>
          <Conteudos>Repositórios: {git.public_repos}</Conteudos>
        </Linha>
        <Linha>
          <Conteudos>Seguidores: {git.followers}</Conteudos>
          <Conteudos>Seguindo: {git.followers}</Conteudos>
        </Linha>
        <Linha>
          <Conteudos>Criada: {git.created_at}</Conteudos>
        </Linha>
        
      </Info>
      
    </Tela>
  );
}


const Info = styled.View`
margin-top: 2px;
  width: 100%;
  flex: 1;
  background-color: #9d9d9e;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

`;

const Titulo = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #3b3a3a;
`;

const Linha = styled.View`
  width: 100%;
  

  flex-direction: row;
  justify-content: space-between;
`;

const Conteudos = styled.Text`
  padding: 1px 10px;
  font-size: 18px;
  color: #3b3a3a;
`;


const Destaque = styled.View`
  margin-top: 2px;
  width: 97%;
  height: 350px;
  background-color: #505152;
  /*
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;*/
  align-items: center;
  justify-content: center;
`;

const Poster = styled.Image`  
  width: 90%;
  height: 90%;
  border-radius: 5px;
`;

const Header = styled.View`
  width: 100%;
  height: 88px;
  background-color: #303133;
  justify-content: flex-end;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const BtnIcone = styled.Image`
  width: 30px;
  height: 30px;

`;

const ButtonBuscar = styled.TouchableOpacity`
  width: 15%;
  background-color: #505152;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 10px
`;

const Input = styled.TextInput`
  padding-left: 10px;
  font-size: 18px;
  color: #FFFFFF;
  width: 85%;
`;

const InputBuscar = styled.View`
  width: 100%;
  height: 58px;
  flex-direction: row;
  justify-content: space-between;
  background: rgba(97, 98, 99, 0.2);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Tela = styled.View`
  flex: 1;
  align-items: center;
`;