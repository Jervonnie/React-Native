import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default function HungerButton({ showImage }) {
  const [isFull, setIsFull] = useState(false);
  
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: isFull ? 'green' : 'red' }]}
      onPress={() => setIsFull(!isFull)}
    >
      <View style={styles.row}>
        <Text style={styles.text}>{isFull ? "Full" : "Hungry"}</Text>
        {showImage && (
          <Image
            source={
              isFull
                ? require('./full.jpg')
                : require('./hungry.png')
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
