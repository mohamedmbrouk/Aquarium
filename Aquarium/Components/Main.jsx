import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-web';
import SignIn from './Users/SignIn';

export default function Main({ navigation }) {
    
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/UIUX/Main/Main1.png')}
        style={styles.backgroundImage}
      >
        <View style={{marginTop:500}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignIn');
          }}
          style={styles.buttonContainer}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText1}>Sign in</Text>
          </View>
        </TouchableOpacity>
        <View style={{alignItems:'center'}}>
            <Text >
            _________________________  OR  _________________________
            </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          style={[styles.buttonContainer, styles.signupButtonContainer]}
        >
          <View style={[styles.button, styles.signupButton]}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    width: 328,
    height: 48,
    backgroundColor: "#235784",
    color: "#ffff",
    alignItems: 'center',
    marginTop:10
  },
  buttonText: {
    color: '#40A8C4',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonText1: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButtonContainer: {
    marginTop: 10, // Adjust the spacing between the two buttons
  },
  signupButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Background color for the signup button
  },
});
