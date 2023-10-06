import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

export default function Kelp({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/UIUX/Home/Home1.png")}
      style={styles.backgroundImage}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../assets/UIUX/PacificAlgae/image 16.png")}
          style={{ width: 310, height: 180 }}
        />
      </View>
      <View>
        <Text style={styles.text1}>Kelp (Brown Algae)</Text>
        <Text style={styles.text1}>
          1. Abundance and Distribution: Kelp algae are large brown algae found
          in cool nutrient-rich waters, primarily in the temperate and polar
          regions of the world, including the Pacific Ocean, Atlantic Ocean, and
          the Southe- rn Ocean.{"\n\n"} 2. Ecological Importance: Kelp forests
          created by these algae are esse- ntial marine ecosystems. They provide
          shelter and food for a wide range of marine organisms from fish to
          invertebrates, contributing to the overall biodiversity of the ocean.
          {"\n\n"} 3. Growth Characteristics: Kelp can grow incredibly fast,
          with some species growing up to half a meter (1.6 feet) a day. They
          can reach impressive heights, forming underwater "forests" that extend
          to the ocean's surface.
        </Text>
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
    textAlign: "center",
    marginVertical: 10,
    fontFamily: "Montserrat",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
});
