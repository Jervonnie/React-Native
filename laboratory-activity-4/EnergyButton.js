import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default function EnergyButton({ showImage }) {
  const [isAwake, setIsAwake] = useState(false);
  
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: isAwake ? 'purple' : 'blue' }]}
      onPress={() => setIsAwake(!isAwake)}
    >
      <View style={styles.row}>
        <Text style={styles.text}>{isAwake ? "Awake" : "Sleepy"}</Text>
        {showImage && (
          <Image
            source={
              isAwake
                ? require('./awake.png')
                : require('./sleep.jpg')
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
