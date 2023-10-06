import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-web";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/UIUX/Home/Home.png")}
      style={styles.backgroundImage}
    >
      <View style={{ marginTop: 350 }}>
        <View style={{ margin: 20 }}>
          <Text style={styles.text1}>A Dive into the World of Algae</Text>
          <TouchableOpacity>
            <Text style={[styles.text1, { fontWeight: 400 }]}>
              Let's Explore
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <ScrollView horizontal={true}>
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => {
              navigation.navigate("Ocean");
            }}
          >
            <Image
              source={require("../assets/UIUX/Home/Group 134.png")}
              style={{ width: 200, height: 200 }}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 10 }}>
            <Image
              source={require("../assets/UIUX/Home/Group 135.png")}
              style={{ width: 200, height: 200 }}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 10 }}>
            <Image
              source={require("../assets/UIUX/Home/Group 136.png")}
              style={{ width: 200, height: 200 }}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 10 }}>
            <Image
              source={require("../assets/UIUX/Home/Group 137.png")}
              style={{ width: 200, height: 200 }}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 10 }}>
            <Image
              source={require("../assets/UIUX/Home/Group 138.png")}
              style={{ width: 200, height: 200 }}
            ></Image>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text style={styles.text1}>Discover the ocean's wonders</Text>

        <Text style={[styles.text1, { fontWeight: 400 }]}>
          Embrace the ocean's mysteries and be amazed!
        </Text>
      </View>

      <View style={{ margin: 7 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Models");
          }}
        >
          <Image
            source={require("../assets/UIUX/Home/Group 129.png")}
            style={{ width: "97%", height: 200 }}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={{ margin: 7 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Game");
          }}
        >
          <Image
            source={require("../assets/UIUX/Home/Group 130.png")}
            style={{ width: "97%", height: 200 }}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={{ margin: 7 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("News");
          }}
        >
          <Image
            source={require("../assets/UIUX/Home/Group 131.png")}
            style={{ width: "97%", height: 200 }}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={{ margin: 7 }}>
        <TouchableOpacity onPress={() => {
            navigation.navigate("Event");
          }}>
          <Image
            source={require("../assets/UIUX/Home/Group 132.png")}
            style={{ width: "97%", height: 200 }}
          ></Image>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  text1: {
    color: "#FFF",
    padding: 5,
    fontFamily: "Montserrat",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
});
