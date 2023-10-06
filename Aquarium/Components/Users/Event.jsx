import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

const images = [
    require("../../assets/UIUX/Event/1.jpg"),
    require("../../assets/UIUX/Event/2.png"),
    require("../../assets/UIUX/Event/3.png"),
    require("../../assets/UIUX/Event/4.png"),
    require("../../assets/UIUX/Event/5.png"),
    require("../../assets/UIUX/Event/6.jpg"),
    require("../../assets/UIUX/Event/7.jpg"),
];

export default function Event({ navigation }) {
    return (
        <ImageBackground
            source={require("../../assets/UIUX/Home/Home1.png")}
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
                <Text style={{ fontSize: 24, color: 'white' }}>Basic images of the ocean from different NASA satellites</Text>
                {images.map((imageSource, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.touchable}
                        onPress={() => {
                            // Handle the onPress action for each image
                            navigation.navigate(`Screen${index + 1}`);
                        }}
                    >
                        <Image
                            source={imageSource}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        alignItems: "center",
 
        flex: 1,
        marginBottom: 120,
        justifyContent: "center",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    touchable: {
        width: 328,
        height: 152,
        marginTop: 15,
    },
    image: {
        width: 328,
        height: 152,
        borderRadius: 15,
    },
});
