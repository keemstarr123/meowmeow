import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function App() {
  const [fontsLoaded] = useFonts({
    PatrickHandSC: require("../assets/fonts/PatrickHandSC-Regular.ttf"),
    Futura: require("../assets/fonts/Futura.ttf"),
  });

  const router = useRouter();

  return fontsLoaded ? (
    <LinearGradient
      colors={["#FFFFFF", "#C9E9D2"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Meow Meow</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/images/landing.png")}
              style={styles.mainImage}
              resizeMode="contain"
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
            <Text style={styles.buttonArrow}>›</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  ) : (
    <View style={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    position: "relative",
  },
  statusBar: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  timeText: {
    fontFamily: "PatrickHandSC",
    fontSize: 16,
  },
  statusIcons: {
    flexDirection: "row",
  },
  statusText: {
    fontSize: 16,
  },
  titleContainer: {
    position: "absolute",
    top: height * 0.12,
    alignSelf: "center",
  },
  titleText: {
    fontFamily: "Futura",
    fontSize: 50,
    fontWeight: "600",
    letterSpacing: 1,
    color: "#000000",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  mainImage: {
    width: width * 1,
    height: height * 0.6,
  },
  button: {
    position: "absolute",
    bottom: 70,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.8,
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "PatrickHandSC",
    fontSize: 24,
    marginRight: 10,
  },
  buttonArrow: {
    fontFamily: "PatrickHandSC",
    fontSize: 28,
  },
});
