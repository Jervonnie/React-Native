import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ContactCard = ({ contact }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.contactInfoContainer}>
        <Text style={styles.contactName}>{contact.name}</Text>
        <Text style={styles.contactDetail}>Phone: {contact.phone}</Text>
        <Text style={styles.contactDetail}>Email: {contact.email}</Text>
        <Text style={styles.contactDetail}>Address: {contact.address}</Text>
      </View>
      
      <View style={styles.profileContainer}>
        <Image source={contact.profilePic} style={styles.profilePic} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 15,
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
  },
  profileContainer: {
    alignItems: 'center',
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  contactInfoContainer: {
    flex: 1, 
    paddingRight: 10, 
  },
  contactName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactDetail: {
    fontSize: 16,
    marginVertical: 3,
    color: '#333',
  },
});

export default ContactCard;
