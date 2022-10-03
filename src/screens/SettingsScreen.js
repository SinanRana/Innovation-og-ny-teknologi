import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Overblik over din profil, Sinan</Text>
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
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default SettingsScreen;
