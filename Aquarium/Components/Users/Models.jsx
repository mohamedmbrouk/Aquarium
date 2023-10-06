import { StyleSheet, Text, View, TouchableOpacity,Linking,ImageBackground ,Image} from 'react-native'
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
    <ImageBackground
      source={require('../../assets/UIUX/PacificAlgae/Pacific.png')} // Replace with your image path
      style={styles.backgroundImage}
    >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("../../assets/UIUX/PacificAlgae/Frame.png")}
            style={{ width: 30, height: 30, marginHorizontal: 30 }}
          />
        </TouchableOpacity>
        <Image
          source={require("../../assets/UIUX/Home/Frame 5.png")}
          style={{ width: 200, height: 150 }}
        />
      </View>
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable}  onPress={handleLinkPress}>
        <Text style={{fontSize:20}}>detect to know the type of fish</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={handleLinkPress2}>
        <Text style={{fontSize:20}}>detect to know the Ocean is clear</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable}>
        <Text style={{fontSize:20}}>know the type of Aglae</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={() => {
            navigation.navigate('Home');
          }}>
        <Text style={{fontSize:20}}>Back to home</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  touchable: {
    width: 300, // Set the width as needed
    height: 80, // Set the height as needed
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
})
