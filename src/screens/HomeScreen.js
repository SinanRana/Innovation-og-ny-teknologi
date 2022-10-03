import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Velkommen!</Text>
        <Text>Denne app hjælper dig med at holde styr på dine brugere!</Text>
      </View>
      <View>
        <Button
          title="Kom i gang!"
          onPress={() => navigation.navigate('Brugere')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    margin: 20,
  },

  header: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default HomeScreen;
