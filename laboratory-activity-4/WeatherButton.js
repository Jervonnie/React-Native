import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default function WeatherButton({ showImage }) {
  const [isSunny, setIsSunny] = useState(false);
  
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: isSunny ? 'orange' : 'gray' }]}
      onPress={() => setIsSunny(!isSunny)}
    >
      <View style={styles.row}>
        <Text style={styles.text}>{isSunny ? "Sunny" : "Rainy"}</Text>
        {showImage && (
          <Image
            source={
              isSunny
                ? require('./sunny.jpg')
                : require('./rainy.png')
            }
            style={styles.image}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { padding: 10, margin: 10, borderRadius: 5 },
  row: { flexDirection: 'row', alignItems: 'center' },
  text: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  image: { width: 30, height: 30, marginLeft: 10 }
});
