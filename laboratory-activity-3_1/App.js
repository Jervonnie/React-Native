import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

const ChangeImageApp = () => {
  const [imageSource, setImageSource] = useState(null);

  const images = [
    require('./image1.jpg'),
    require('./image2.jpg'),
    require('./image3.jpg'),
    require('./image4.jpg')
  ];

  const handleImageChange = (index) => {
    setImageSource(images[index]);
  };

  return (
    <View style={styles.container}>
      {imageSource && <Image source={imageSource} style={styles.image} />}

      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="Ducati Multistrada v4" onPress={() => handleImageChange(0)} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Yamaha r1m" onPress={() => handleImageChange(1)} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Yamaha Aerox 155" onPress={() => handleImageChange(2)} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Yamaha pg1" onPress={() => handleImageChange(3)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'column', 
    alignItems: 'center',
  },
  buttonWrapper: {
    marginBottom:20, 
    borderRadius: 12,
    overflow:'hidden', 
  },
});

export default ChangeImageApp;
