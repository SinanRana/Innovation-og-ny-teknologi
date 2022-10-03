import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const UserScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);

  const url = 'https://jsonplaceholder.typicode.com/users';

  const clearState = () => {
    setData([]);
    setLoading(null);
  };

  const fetchData = () => {
    setLoading(true);

    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text>Klik på knappen for hente data om dine brugere</Text>
      <View>
        <Button title="Hent data" onPress={fetchData} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 20 }}>Navn</Text>
        <Text style={{ fontSize: 20 }}>Brugernavn</Text>
      </View>

      {loading ? (
        <Text>Finder dine brugere frem ....</Text>
      ) : (
        data.map((users) => (
          <View>
            <View style={styles.name}>
              <Text>{users.name}</Text>
              <Text>{users.username}</Text>
            </View>
          </View>
        ))
      )}
      <Button title="Fjern data" onPress={clearState} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 100,
    margin: 20,
    flexDirection: 'column',
  },
  name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default UserScreen;
