import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Linking,
} from "react-native";

export default function News({ navigation }) {
  const handleLinkPress1 = () => {
    const url =
      "https://www.dfo-mpo.gc.ca/oceans/conservation/plan/MCT-OCM-eng.html"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };
  const handleLinkPress2 = () => {
    const url = "https://open.canada.ca/data/en/organization/ec?page=1"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };
  const handleLinkPress3 = () => {
    const url =
      "https://open.canada.ca/data/dataset/a733fb88-ddaf-47f8-95bb-e107630e8e62"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };
  const handleLinkPress4 = () => {
    const url = "https://www.euronews.com/tag/sea"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };
  const handleLinkPress5 = () => {
    const url = "https://www.euronews.com/tag/sea"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };
  const handleLinkPress6 = () => {
    const url = "https://www.euronews.com/tag/sea"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };

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
      <View style={{}}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.touchable} onPress={handleLinkPress1}>
            <Image
              source={require("../../assets/UIUX/News/1.jpg")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={handleLinkPress2}>
            <Image
              source={require("../../assets/UIUX/News/2.jpg")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={handleLinkPress3}>
            <Image
              source={require("../../assets/UIUX/News/3.jpg")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={handleLinkPress4}>
            <Image
              source={require("../../assets/UIUX/News/4.jpg")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={handleLinkPress5}>
            <Image
              source={require("../../assets/UIUX/News/5.jpg")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={handleLinkPress6}>
            <Image
              source={require("../../assets/UIUX/News/6.jpg")}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    alignItems: "center",
    marginTop: 16,
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
