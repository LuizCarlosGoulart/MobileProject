import React from 'react';
import { View, StyleSheet } from 'react-native';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Layout;
