// components/ProductList.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

/* =======================
   Données (catalogue)
======================= */
const productsToDisplay = [
  { id: 'P01', name: 'Smartphone Nova X', price: 499, category: 'Smartphone' },
  { id: 'P02', name: 'Laptop Pro 15"', price: 1199, category: 'Laptop' },
  { id: 'P03', name: 'Casque Bluetooth AirSound', price: 149, category: 'Audio' },
  { id: 'P04', name: 'Montre Connectée FitTrack', price: 199, category: 'Wearable' },
  { id: 'P05', name: 'Clavier Mécanique MX Blue', price: 89, category: 'Accessoire' },
  { id: 'P06', name: 'Souris Gamer LaserX', price: 59, category: 'Accessoire' },
  { id: 'P07', name: 'Écran 27" UltraHD', price: 349, category: 'Écran' },
  { id: 'P08', name: 'Disque SSD 1 To', price: 129, category: 'Stockage' },
  { id: 'P09', name: 'Routeur WiFi 6', price: 179, category: 'Réseau' },
  { id: 'P10', name: 'Casque VR Immersion', price: 399, category: 'VR' },
];

/* =======================
   Composant Item
======================= */
function ProductItem({ name, price, category }) {
  const isExpensive = price > 500;

  return (
    <View style={[styles.itemContainer, isExpensive && styles.expensiveItem]}>
      <View>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemCategory}>{category}</Text>
      </View>
      <Text style={styles.itemPrice}>{price} €</Text>
    </View>
  );
}

/* =======================
   Header de la liste
======================= */
const ListHeader = () => (
  <View style={styles.listHeader}>
    <Text style={styles.subtitle}>
      Découvrez nos meilleurs produits technologiques
    </Text>
  </View>
);

/* =======================
   Séparateur
======================= */
const ItemSeparator = () => <View style={styles.separator} />;

/* =======================
   Composant principal
======================= */
export default function ProductList() {
  const renderProductItem = ({ item, index }) => (
    <ProductItem
      name={`${index + 1}. ${item.name}`}
      price={item.price}
      category={item.category}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Catalogue TechMarket</Text>

      <FlatList
        data={productsToDisplay}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ListHeader}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
}

/* =======================
   Styles
======================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEFEE',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 16,
    color: '#333333',
    marginRight: 10,
  },
  itemCategory: {
    fontSize: 12,
    color: '#777777',
  },
  itemPrice: {
    fontSize: 16,
    color: '#EE9972',
    fontWeight: 'bold',
  },
  expensiveItem: {
    borderColor: '#EE9972',
    borderWidth: 2,
  },
  listHeader: {
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555555',
  },
  separator: {
    height: 8,
  },
});
