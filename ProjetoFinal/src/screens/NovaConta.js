import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NovaConta = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaTemp, setSenhaTemp] = useState('');
  const [erroSenha, setErroSenha] = useState(false);
  const [erroEmail, setErroEmail] = useState(false);
  const navigation = useNavigation();
  const [image, setImage] = useState(); // Imagem padrão

  const difSenha = () => {
    if (senha !== senhaTemp) {
      setErroSenha(true);
    } else {
      setErroSenha(false);
    }
  };

  const emailPadrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validarEmail = (email) => {
    setErroEmail(!emailPadrao.test(email));
    setEmail(email);
  };

  const validarCadastro = () => {
    validarEmail(email);
    difSenha();
  };

  return (
    <View style={estilo.tela}>
      <View style={estilo.cabecalho}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        </TouchableOpacity>
      </View>

      <View style={estilo.corpo}>
        <Text style={estilo.txtCorpo}>E-mail</Text>
        <TextInput
          style={estilo.txtEntrada}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text
          style={[
            estilo.erro,
            { color: erroEmail ? '#FD7979' : '#372775' },
          ]}
        >
          Formato de e-mail inválido
        </Text>

        <Text style={estilo.txtCorpo}>Senha</Text>
        <TextInput
          style={[estilo.txtEntrada, estilo.espacamentoSenha]}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />

        <Text style={estilo.txtCorpo}>Repetir senha</Text>
        <TextInput
          style={estilo.txtEntrada}
          value={senhaTemp}
          onChangeText={setSenhaTemp}
          secureTextEntry={true}
        />
        <Text
          style={[
            estilo.erro,
            { color: erroSenha ? '#FD7979' : '#372775' },
          ]}
        >
          O campo repetir senha difere da senha
        </Text>
      </View>

      <View style={estilo.rodape}>
        <TouchableOpacity style={estilo.botao} onPress={validarCadastro}>
          <Text style={estilo.txtBotao}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const estilo = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#372775',
  },

  

  txtcabecalho: {
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 48,
    marginLeft: 30,
  },

  corpo: {
    paddingHorizontal: 200,
  },

  txtCorpo: {
    fontSize: 28,
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFFFFF',
    marginBottom: 10,
    width: '100%',
  },

  txtEntrada: {
    fontSize: 28,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    color: '#3F92C5',
    width: '100%',
    padding: 10,
  },

  espacamentoSenha: {
    marginBottom: 45,
  },

  erro: {
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
    marginBottom: 15,
  },

  rodape: {
    paddingHorizontal: 200,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  botao: {
    backgroundColor: '#37BD6D',
    padding: 10,
    width: '100%',
  },
  
  txtBotao: {
    fontSize: 28,
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default NovaConta;
