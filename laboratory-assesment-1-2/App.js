import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ProductInfo from './ProductInfo'; 

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductInfo /> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;


