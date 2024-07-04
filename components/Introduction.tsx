import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const backgroundImage = require('../assets/images/background.jpg'); // Certifique-se de ter uma imagem de fundo na pasta assets/images

const Introduction = () => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 2000 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Animated.Text style={[styles.heading, animatedStyle]}>Bem-vindo!</Animated.Text>
          <Animated.Text style={[styles.text, animatedStyle]}>
            Explore como a arquitetura pode contribuir para o desenvolvimento de cidades mais saudáveis e sustentáveis.
          </Animated.Text>
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Roboto_700Bold',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
  },
});

export default Introduction;
