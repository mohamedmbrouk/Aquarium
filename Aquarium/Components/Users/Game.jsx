import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  Modal,
  Button, // Import Button component
} from 'react-native';

const { width, height } = Dimensions.get('window');

const GameScreen = () => {
  const [score, setScore] = useState(0);
  const [characterPosition, setCharacterPosition] = useState({ x: 0, y: 0 });
  const [itemPositions, setItemPositions] = useState(generateRandomPositions(6));
  const itemImagePaths = [
    require('../../assets/UIUX/Game/west1.png'),
    require('../../assets/UIUX/Game/west2.png'),
    require('../../assets/UIUX/Game/west3.png'),
    require('../../assets/UIUX/Game/Algae1.png'),
    require('../../assets/UIUX/Game/Algae2.png'),
    require('../../assets/UIUX/Game/Algae3.png'),
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);

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

      // Check for collision with the items
      itemPositions.forEach((itemPosition, index) => {
        if (
          newPosition.x <= itemPosition.x + 40 &&
          newPosition.x + 40 >= itemPosition.x &&
          newPosition.y <= itemPosition.y + 40 &&
          newPosition.y + 40 >= itemPosition.y
        ) {
          // Increase score and generate a new position for the collected item
          setScore(score + 1);
          const newItems = [...itemPositions];
          newItems.splice(index, 1, generateRandomPosition());
          setItemPositions(newItems);
        }
      });

      setCharacterPosition(newPosition);
    };

    // Add event listener for keyboard input
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      // Remove event listener when component unmounts
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [characterPosition, itemPositions, score]);

  // Generate an array of random positions for the items
  function generateRandomPositions(count) {
    const positions = [];
    for (let i = 0; i < count; i++) {
      positions.push(generateRandomPosition());
    }
    return positions;
  }

  // Generate a random position for an item
  function generateRandomPosition() {
    const x = Math.floor(Math.random() * (width - 40));
    const y = Math.floor(Math.random() * (height - 40));
    return { x, y };
  }

  function closeModal() {
    navigation.navigate('Home')
    setIsModalVisible(false);
  }

  useEffect(() => {
    // Check if the score is 10 and show the modal
    if (score === 7) {
      setIsModalVisible(true);
    }
  }, [score]);

  return (
    <ImageBackground
      source={require('../../assets/UIUX/Game/see.jpg')} // Replace with your image path
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.scoreText}>Score: {score}</Text>
        <Image
          source={require('../../assets/UIUX/Game/car.png')} // Replace with your character image path
          style={[
            styles.character,
            { left: characterPosition.x, top: characterPosition.y },
          ]}
        />
        {itemPositions.map((itemPosition, index) => (
          <Image
            key={index}
            source={itemImagePaths[index % itemImagePaths.length]} // Cycle through item images
            style={[
              styles.item,
              { left: itemPosition.x, top: itemPosition.y },
            ]}
          />
        ))}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modal}>
          <Text style={styles.modalText}>Proud to help us change our world</Text>
          <Button title="Close" onPress={closeModal} />
        </View>
      </Modal>
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
    width: 150,
    height: 150,
    position: 'absolute',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  item: {
    width: 130,
    height: 130,
    position: 'absolute',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:150,
    height:150,
  },
  modalText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default GameScreen;
