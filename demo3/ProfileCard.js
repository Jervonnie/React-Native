import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default function ProfileCard({ name, imageUri, location, bio, email, phone }) {
  return (
    <View style={styles.card}>
      {/* Profile Picture with Border */}
      <Image source={require('./yawa.png')} style={styles.image} />

      <Text style={styles.title}>Profile Card</Text>

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.location}>{location}</Text>

      <Text style={styles.bio}>{bio}</Text>

      {email && <Text style={styles.extraText}>Email: {email}</Text>}
      {phone && <Text style={styles.extraText}>Phone: {phone}</Text>}


      <TouchableOpacity style={styles.followButton} onPress={() => alert('Followed!')}>
        <Text style={styles.followButtonText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 320,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#ccc', // Add border around the image
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 15,
  },
  extraText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  followButton: {
    width: '100%',
    backgroundColor: '#4CAF50', // Green color
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  followButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
