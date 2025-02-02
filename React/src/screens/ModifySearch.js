import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PopUp from '../components/PopUp';

const ModifySearch = ({ navigation }) => {
  const [nome, setNome] = useState('Carnaval 2024');
  const [data, setData] = useState('16/02/2024');
  const [image, setImage] = useState(require('../../assets/images/imagem.png')); // Imagem padrão
  const [popUpVisible, setPopUpVisible] = useState(false);

  const goToHome = () =>{
    navigation.pop(2); //desimpilha 2 telas para voltar para home(drawer)
    setPopUpVisible(false);
  };

  const showPopUp = () => { //mostrar pop up
    setPopUpVisible(true);
  };

  const goToAcoesPesquisa = () => { 
    navigation.goBack() // desimpilha esta tela para voltar para açoes pesquisa caso clique em cancelar no pop up
    setPopUpVisible(false);
  }

  return (
    <View style={estilo.tela}>
      <View style={estilo.corpo}>
        <Text style={estilo.txtCorpo}>Nome</Text>
        <TextInput
          style={estilo.txtEntrada}
          value={nome}
          onChangeText={setNome}
        />
        <Text style={estilo.txtCorpo}>Data</Text>
        <View style={estilo.dateContainer}>
          <TextInput
            style={estilo.txtEntradaData}
            value={data}
            onChangeText={setData}
            placeholder=""
            placeholderTextColor="#3F92C5"
          />
          <MaterialIcons name="calendar-today" size={30} color="#3F92C5" style={estilo.iconeCalendario} />
        </View>
        <Text style={estilo.txtCorpo}>Imagem</Text>
        <TouchableOpacity style={estilo.imageContainer}>
          <Image
            source={image}
            style={estilo.image}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={estilo.botoesContainer}>
          <TouchableOpacity style={estilo.botaoSalvar} onPress={goToHome}>
            <Text style={estilo.txtBotao}>SALVAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilo.botaoApagar} onPress={showPopUp}>
            <MaterialIcons name="delete" size={24} color="#FFFFFF" />
            <Text style={estilo.txtApagar}>Apagar</Text>
          </TouchableOpacity>
          <PopUp visible={popUpVisible} onConfirm={goToHome} onCancel={goToAcoesPesquisa} />
        </View>
      </View>
    </View>
  );
};

const estilo = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#372775',
    alignItems: 'center',
  },
  corpo: {
    paddingHorizontal: 20,
    paddingTop: 10,
    width: '80%',
  },
  txtCorpo: {
    fontSize: 16,
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFFFFF',
    marginBottom: 1,
  },
  txtEntrada: {
    fontSize: 16,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#FFFFFF',
    color: '#3F92C5',
    padding: 5,
    marginBottom: 10,
    width: '100%',
  },
  txtEntradaData: {
    fontSize: 16,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#FFFFFF',
    color: '#3F92C5',
    padding: 5,
    flex: 1,
  },
  dateContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconeCalendario: {
    position: 'absolute',
    right: 10, // Alinha o ícone à direita dentro do TextInput
  },
  imageContainer: {
    backgroundColor: '#FFFFFF',
    height: 78,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    overflow: 'hidden',
  },
  image: {
    height: 70,
    width: 70,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 11
  },
  botaoSalvar: {
    flex: 1,
    backgroundColor: '#37BD6D',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10
  },
  txtBotao: {
    fontSize: 18,
    fontFamily: 'AveriaLibre-Bold',
    color: '#FFFFFF',
  },
  botaoApagar: {
    alignItems: 'center',
    bottom: 2,
    right:-85
  },
  txtApagar: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'AveriaLibre-Regular',
    marginTop: -5, // Ajusta a posição do texto para que fique logo abaixo do ícone
  },
});

export default ModifySearch;
