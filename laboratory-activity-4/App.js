import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HungerButton from './HungerButton';
import WeatherButton from './WeatherButton';
import EnergyButton from './EnergyButton';
import ShopSign from './ShopSign';
import MediaButton from './MediaButton';

export default function App() {
  const [showImage, setShowImage] = useState(false);
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Laboratory Activity 4 with Image Toggle</Text>
      
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setShowImage(!showImage)}
      >
        <Text style={styles.toggleText}>{showImage ? "Hide Images" : "Show Images"}</Text>
      </TouchableOpacity>
      
      <HungerButton showImage={showImage} />
      <WeatherButton showImage={showImage} />
      <EnergyButton showImage={showImage} />
      <ShopSign showImage={showImage} />
      <MediaButton showImage={showImage} />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 20 },
  toggleButton: { backgroundColor: '#333', padding: 10, borderRadius: 5, marginBottom: 20 },
  toggleText: { color: 'white', fontWeight: 'bold' }
});
