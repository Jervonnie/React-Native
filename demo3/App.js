import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileCard from './ProfileCard';

export default function App() {
  const profile = {
    name: 'Jervonnie Loi P. Corpuz',
    location: 'Katuparan St',
    bio: 'Mechanic,motorcycle rider.'
  };

  return (
    <View style={styles.container}>
      <ProfileCard
        name={profile.name}
        location={profile.location}
        bio={profile.bio}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});
