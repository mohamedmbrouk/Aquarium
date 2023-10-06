import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';

const { width, height } = Dimensions.get('window');

const GameScreen = () => {
  const [score, setScore] = useState(0);
  const [characterPosition, setCharacterPosition] = useState({ x: 0, y: 0 });
  const [itemPosition, setItemPosition] = useState(generateRandomPosition());

  useEffect(() => {
    const handleKeyPress = ({ key }) => {
      const speed = 10; // Adjust the speed as needed
      let newPosition = { ...characterPosition };

      if (key === 'w') {
        newPosition.y -= speed;
      } else if (key === 's') {
        newPosition.y += speed;
      } else if (key === 'a') {
        newPosition.x -= speed;
      } else if (key === 'd') {
        newPosition.x += speed;
      }

      // Check for collision with the item
      if (
        newPosition.x <= itemPosition.x + 20 &&
        newPosition.x + 40 >= itemPosition.x &&
        newPosition.y <= itemPosition.y + 20 &&
        newPosition.y + 40 >= itemPosition.y
      ) {
        // Increase score and generate a new item
        setScore(score + 1);
        setItemPosition(generateRandomPosition());
      }

      setCharacterPosition(newPosition);
    };

    // Add event listener for keyboard input
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      // Remove event listener when component unmounts
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [characterPosition, itemPosition, score]);

  // Generate a random position for the item
  function generateRandomPosition() {
    const x = Math.floor(Math.random() * (width - 40));
    const y = Math.floor(Math.random() * (height - 40));
    return { x, y };
  }

  return (
    <ImageBackground
      source={require('../../assets/UIUX/Game/see.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.scoreText}>Score: {score}</Text>
        <View
          style={[
            styles.character,
            { left: characterPosition.x, top: characterPosition.y },
          ]}
        />
        <View
          style={[
            styles.item,
            { left: itemPosition.x, top: itemPosition.y },
          ]}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  character: {
    width: 40,
    height: 40,
    backgroundColor: 'blue',
    position: 'absolute',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%', // Use 100% width to cover the entire screen
    height: '100%', // Use 100% height to cover the entire screen
  },
  item: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    position: 'absolute',
  },
});

export default GameScreen;
