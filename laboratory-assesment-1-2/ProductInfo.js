import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';

const ProductInfo = () => {
  const product = {
    image: require('./capy.jpg'),
    name: 'Dale',
    price: '$49.99',
    description: 'This is dale a nonchalant capybara.',
  };

  const [rating, setRating] = useState(0);  
  const [selectedColor, setSelectedColor] = useState('Red');
  const [selectedSize, setSelectedSize] = useState('M');

  const colors = ['Red', 'Blue', 'Green', 'Black'];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const handleAddToCart = () => {
    alert('Product added to cart!');
  };

  const handleRating = (star) => {
    setRating(star);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.productImageContainer}>
        <Image source={product.image} style={styles.productImage} />
      </View>


      <Text style={styles.productName}>{product.name}</Text>


      <Text style={styles.productPrice}>{product.price}</Text>

      <Text style={styles.productDescription}>{product.description}</Text>

      <View style={styles.ratingContainer}>
        {Array.from({ length: 5 }, (_, index) => (
          <TouchableOpacity key={index} onPress={() => handleRating(index + 1)}>
            <Text style={[styles.star, rating > index ? styles.filledStar : styles.emptyStar]}>
              ★
            </Text>
          </TouchableOpacity>
        ))}
      </View>


      <Text style={styles.optionLabel}>Choose a color:</Text>
      <FlatList
        horizontal
        data={colors}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.colorPicker,
              { backgroundColor: item.toLowerCase() },
              selectedColor === item && styles.selectedColor,
            ]}
            onPress={() => setSelectedColor(item)}
          />
        )}
        keyExtractor={(item) => item}
      />


      <Text style={styles.optionLabel}>Choose a size:</Text>
      <View style={styles.sizePickerContainer}>
        {sizes.map((size) => (
          <TouchableOpacity
            key={size}
            style={[
              styles.sizeButton,
              selectedSize === size && styles.selectedSize,
            ]}
            onPress={() => setSelectedSize(size)}
          >
            <Text style={styles.sizeButtonText}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>


      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f5f5f5',
  },
  productImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 10,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: '#00B74A',
    textAlign: 'center',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  star: {
    fontSize: 30,
    marginHorizontal: 5,
  },
  filledStar: {
    color: '#FFD700', 
  },
  emptyStar: {
    color: '#d3d3d3', 
  },
  optionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  colorPicker: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  selectedColor: {
    borderColor: '#000',
    borderWidth: 3,
  },
  sizePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  sizeButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  selectedSize: {
    backgroundColor: '#00B74A',
  },
  sizeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  addToCartButton: {
    backgroundColor: '#00B74A',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductInfo;
