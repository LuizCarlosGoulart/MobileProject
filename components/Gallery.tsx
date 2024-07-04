import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type ImageSource = { uri: string } | number;

interface ImageItem {
  source: ImageSource;
  title: string;
  description: string;
}

const brazilImages: ImageItem[] = [
  { source: require('../assets/images/city1.jpg'), title: 'Jardim Botânico', description: 'O Jardim Botânico de Curitiba, ou Jardim Botânico Francisca Rischbieter, é um dos principais pontos turísticos da cidade de Curitiba, capital do estado brasileiro do Paraná. Localiza-se no bairro Jardim Botânico. Em 2007 foi o monumento mais votado numa eleição para escolha das Sete Maravilhas do Brasil, promovido pelo site Mapa-Mundi. \n \n Inaugurado em 5 de outubro de 1991, seu nome oficial (J.B. Francisca Rischbieter) presta uma homenagem à urbanista Francisca Maria Garfunkel Rischbieter, uma das pioneiras no trabalho de planejamento urbano da capital paranaense).' },
  { source: require('../assets/images/city2.jpg'), title: 'Cataratas do Iguaçu', description: 'Cataratas do Iguaçu é um conjunto de cerca de 275 quedas de água no rio Iguaçu (na Bacia hidrográfica do rio Paraná), localizada entre o Parque Nacional do Iguaçu, Paraná, no Brasil, e o Parque Nacional Iguazú em Misiones, na Argentina, na fronteira entre os dois países. A área total de ambos os parques nacionais corresponde a 250 mil hectares de floresta subtropical e é considerada Patrimônio Natural da Humanidade. \n \n O parque nacional argentino foi criado em 1934, enquanto o parque brasileiro foi inaugurado em 1939. Ambas as áreas de proteção com o propósito de administrar e preservar o manancial de água que representa essa catarata e o conjunto do meio ambiente ao seu redor.' },
  { source: require('../assets/images/city3.jpg'), title: 'Parque Ibirapuera', description: 'O Parque Ibirapuera é um parque urbano localizado na cidade de São Paulo, Brasil. Em 2017, foi o parque mais visitado da América Latina, com aproximadamente 14 milhões de visitas, além de ser um dos locais mais fotografados do mundo. \n \n Inaugurado em 1954 com uma área de 158 hectares (390 acres), entre as avenidas Pedro Álvares Cabral, República do Líbano e IV Centenário, o Parque Ibirapuera é um parque tombado e patrimônio histórico de São Paulo. Seus jardins foram desenhados pelo paisagista Otávio Augusto Teixeira Mendes, após o conceito e anteprojeto do paisagista Roberto Burle Marx, a quem foram inicialmente encomendados, encontrarem resistência para sua efetiva realização.' },
];

const englandImages: ImageItem[] = [
  { source: require('../assets/images/city4.jpg'), title: 'Stonehenge', description: 'Stonehenge é uma estrutura composta, formada por círculos concêntricos de pedras, que chegam a ter 5 metros de altura e a pesar quase 50 toneladas, localizada na Inglaterra, no condado de Wiltshire, na Planície de Salisbury. \n \n Recolhendo os dados a respeito do movimento de corpos celestiais, as observações de Stonehenge foram usadas para indicar os dias apropriados no ciclo ritual anual. Nesta consideração, a estrutura não foi usada somente para determinar o ciclo agrícola, uma vez que nesta região o solstício de verão ocorre bem após o começo da estação de crescimento; e o solstício de inverno bem depois que a colheita é terminada.' },
  { source: require('../assets/images/city5.jpg'), title: 'Castelo de Windsor', description: 'O Castelo de Windsor é uma residência real localizada na cidade de Windsor em Berkshire, Inglaterra, Reino Unido. A edificação é notável por sua longa associação com as famílias reais inglesa e britânica e também por sua arquitetura. O castelo original foi construído no século XI, após a conquista normanda da Inglaterra por Guilherme I. Ele é usado pelos monarcas desde o reinado de Henrique I e é o castelo há mais tempo habitado de toda a Europa. \n \n Seus luxuosos Apartamentos de Estado do início do século XIX são arquiteturalmente significantes, descritos pelo historiador Hugh Roberts como "uma sequência soberba e inigualável de quartos amplamente considerados como a expressão mais completa do posterior gosto jorgiano".' },
  { source: require('../assets/images/city6.jpg'), title: 'Palácio de Buckingham', description: 'O Palácio de Buckingham é a residência oficial e principal local de trabalho do Monarca do Reino Unido em Londres. Localizado na Cidade de Westminster, o palácio é frequentemente o centro de ocasiões de estado e hospitalidade real. Ele já foi o foco do povo britânico em tempos de alegria nacional. \n \n Originalmente conhecido como Casa Buckingham, o prédio que hoje forma o núcleo do palácio era uma grande casa de cidade construída em 1703 para John Sheffield, 1.º Duque de Buckingham e Normanby, em um local que era propriedade privada por pelo menos 150 anos.' },
];

type RootStackParamList = {
  BrazilGallery: { country: string };
  EnglandGallery: { country: string };
  Countries: undefined;
};

type GalleryRouteProp = RouteProp<RootStackParamList, 'BrazilGallery'> | RouteProp<RootStackParamList, 'EnglandGallery'>;

type GalleryProps = {
  route: GalleryRouteProp;
  navigation: StackNavigationProp<RootStackParamList>;
};

const Gallery: React.FC<GalleryProps> = ({ route }) => {
  const { country } = route.params;
  const images = country === 'Brasil' ? brazilImages : englandImages;

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageSource | null>(null);

  const openModal = (image: ImageSource) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {images.map((image, index) => (
          <View key={index} style={styles.imageTextContainer}>
            <TouchableOpacity onPress={() => openModal(image.source)} style={styles.imageWrapper}>
              <Image source={image.source} style={styles.image} resizeMode="cover" />
              <LinearGradient
                colors={['transparent', '#2f2f2f']}
                style={styles.gradient}
              />
            </TouchableOpacity>
            <View style={styles.textWrapper}>
              <Text style={styles.title}>{image.title}</Text>
              <Text style={styles.description}>{image.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      {selectedImage && (
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Image source={selectedImage} style={styles.modalImage} resizeMode="contain" />
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f2f2f',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  imageTextContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginBottom: 20,
  },
  imageWrapper: {
    height: '50%',
    overflow: 'hidden',
  },
  textWrapper: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Roboto_700Bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto_400Regular',
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto_700Bold',
  },
  modalImage: {
    width: '100%',
    height: '80%',
  },
});

export default Gallery;
