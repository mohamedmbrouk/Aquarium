import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Ocean({ navigation }) {
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
      <View>
        <Text style={styles.text1}> Algae in The Pacific Ocean </Text>
        <Text style={[styles.text1, { fontSize: 13, fontWeight: 400 }]}>
          The Pacific Ocean, Earth's largest and deepest, including various
          algae species. These algae are oxygen producers, and climate
          influencers. Notable Pacific Ocean algae include...
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          margin: 20,
          marginVertical: 15,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{ marginHorizontal: 20 }}
          onPress={() => navigation.navigate("Kelp")}
        >
          <Image
            source={require("../../assets/UIUX/PacificAlgae/Kelp.png")}
            style={{ width: 150, height: 250 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/UIUX/PacificAlgae/Red.png")}
            style={{ width: 167, height: 215 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          margin: 25,
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={{ marginHorzintal: 10 }}>
          <Image
            source={require("../../assets/UIUX/PacificAlgae/BlueGreen.png")}
            style={{ width: 153, height: 205 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/UIUX/PacificAlgae/Green.png")}
            style={{ width: 167, height: 237 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../assets/UIUX/PacificAlgae/Group 156.png")}
          style={{ width: 60, height: 10 }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  text1: {
    color: "#FFF",
    padding: 5,
    margin: 10,
    marginVertical: 5,
    fontFamily: "Montserrat",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
});
