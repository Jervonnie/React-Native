import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default function MediaButton({ showImage }) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: isPlaying ? 'pink' : 'teal' }]}
      onPress={() => setIsPlaying(!isPlaying)}
    >
      <View style={styles.row}>
        <Text style={styles.text}>{isPlaying ? "Pause" : "Play"}</Text>
        {showImage && (
          <Image
            source={
              isPlaying
                ? require('./pause.png')
                : require('./play.png')
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
