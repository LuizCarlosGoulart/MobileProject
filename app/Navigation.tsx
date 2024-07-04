import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CountryList from '../components/CountryList';
import Gallery from '../components/Gallery';
import Introduction from '../components/Introduction';
import Contact from '../components/Contact';

type RootStackParamList = {
    Countries: undefined;
    BrazilGallery: { country: string };
    EnglandGallery: { country: string };
  };
  
  const Stack = createStackNavigator<RootStackParamList>();
  const Tab = createMaterialTopTabNavigator();
  
  const GalleryStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Countries" component={CountryList} options={{ title: 'Países', headerStyle: { backgroundColor: '#2f2f2f' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="BrazilGallery" component={Gallery} initialParams={{ country: 'Brasil' }} options={{ title: 'Galeria', headerStyle: { backgroundColor: '#2f2f2f' }, headerTintColor: '#fff' }} />
      <Stack.Screen name="EnglandGallery" component={Gallery} initialParams={{ country: 'Inglaterra' }} options={{ title: 'Galeria', headerStyle: { backgroundColor: '#2f2f2f' }, headerTintColor: '#fff' }} />
    </Stack.Navigator>
  );
  
  const Navigation = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { backgroundColor: '#4CAF50' },
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#f5f5f5',
            tabBarIndicatorStyle: { backgroundColor: '#fff' },
          }}
        >
          <Tab.Screen name="Introduction" component={Introduction} options={{ title: 'Introdução' }} />
          <Tab.Screen name="GalleryStack" component={GalleryStack} options={{ title: 'Galeria' }} />
          <Tab.Screen name="Contact" component={Contact} options={{ title: 'Contato' }} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
  
  export default Navigation;