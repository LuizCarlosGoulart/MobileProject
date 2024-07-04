import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default Layout;
