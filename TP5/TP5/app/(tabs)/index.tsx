import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ProductList from '../../components/ProductList';

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <ProductList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#EDEFEE',
  },
});