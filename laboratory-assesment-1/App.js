import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import ContactCard from './contact_list';

const App = () => {
  const contact1 = {
    name: "capy1",
    phone: "09755824511",
    email: "capy1@gmail.com",
    address: "under the water",
    profilePic: require('./capy2.jpg'), 
  };

  const contact2 = {
    name: "capy2",
    phone: "09754865935",
    email: "capy2@gmail.com",
    address: "above the water",
    profilePic: require('./capy3.jpg'),
  };

  const contact3 = {
    name: "capy3",
    phone: "09658753125",
    email: "capy3@gmail.com",
    address: "middle of the water",
    profilePic: require('./capy4.jpg'), 
  };

  const contact4 = {
    name: "capy4",
    phone: "09658963125",
    email: "capy4@gmail.com",
    address: "sometimes into the water",
    profilePic: require('./capy5.jpg'), 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CONTACT</Text>
      </View>

      <View style={styles.profilePictureContainer}>
        <Image
          source={require('./capy.jpg')} 
          style={styles.profilePicture}
        />
      </View>

      <ContactCard contact={contact1} />
      <ContactCard contact={contact2} />
      <ContactCard contact={contact3} />
      <ContactCard contact={contact4} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 20, 
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60, 
    borderWidth: 4,
    borderColor: '#ddd',
  },
  header: {
    width: '100%',
    padding: 5,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default App;
