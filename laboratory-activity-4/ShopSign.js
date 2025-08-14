import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default function ShopSign({ showImage }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: isOpen ? 'green' : 'red' }]}
      onPress={() => setIsOpen(!isOpen)}
    >
      <View style={styles.row}>
        <Text style={styles.text}>{isOpen ? "Open" : "Closed"}</Text>
        {showImage && (
          <Image
            source={
              isOpen
                ? require('./open.png')
                : require('./closed.jpg')
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
