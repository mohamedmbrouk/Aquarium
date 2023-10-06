import { StyleSheet, Text, View, TouchableOpacity,Linking } from 'react-native'
import React from 'react'


export default function Models(native) {
    const handleLinkPress = () => {
        const url = 'https://app.roboflow.com/project-20fgb/aquarium-nasa-space/deploy/2'; // Replace with your desired URL
        Linking.openURL(url)
          .catch((err) => console.error('An error occurred', err));
      };
      const handleLinkPress2 = () => {
        const url = 'https://demo.roboflow.com/trash-nasa-space/1?publishable_key=rf_bxzdmWfOOKdb9RRbF7GW7aFSPaZ2'; // Replace with your desired URL
        Linking.openURL(url)
          .catch((err) => console.error('An error occurred', err));
      };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable}  onPress={handleLinkPress}>
        <Text>Touchable 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={handleLinkPress2}>
        <Text>Touchable 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable}>
        <Text>Touchable 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={() => {
            navigation.navigate('Home');
          }}>
        <Text>Touchable 3</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    width: 200, // Set the width as needed
    height: 50, // Set the height as needed
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
})
