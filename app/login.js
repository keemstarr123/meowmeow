import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    PatrickHandSC: require("../assets/fonts/PatrickHandSC-Regular.ttf"),
    Futura: require("../assets/fonts/Futura.ttf"),
  });

  const handleSignUp = () => {
    Alert.alert("Feature Invalid", "Sign Up feature is not available yet.");
  };

  const handleSendOtp = () => {
    if (!phoneNumber || phoneNumber.trim() === "") {
      Alert.alert("Error", "Please enter a valid phone number");
      return;
    }

    Alert.alert("Success", `OTP code sent to ${phoneNumber}`);
    setOtpSent(true);
  };

  const handleLogin = () => {
    if (!otpSent) {
      Alert.alert("Error", "Please request an OTP first");
      return;
    }

    if (!otp || otp.trim() === "") {
      Alert.alert("Error", "Please enter the OTP code");
      return;
    }

    Alert.alert("Success", "Login successful!");
    router.push("/chat");
  };

  const handleGoogleLogin = () => {
    Alert.alert("Success", "Google login clicked");
    router.push("/chat");
  };

  const handleFacebookLogin = () => {
    Alert.alert("Success", "Facebook login clicked");
    router.push("/chat");
  };

  return fontsLoaded ? (
    <LinearGradient
      colors={["#FFFFFF", "#FFECB6"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF8EA" />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardContainer}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.formContainer}>
              <Text style={styles.headerText}>Login</Text>
              <Text style={styles.signupText}>
                Don't have an account?{" "}
                <Text style={styles.linkText} onPress={handleSignUp}>
                  Sign Up
                </Text>
              </Text>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Phone Number</Text>
                <View style={styles.phoneInputContainer}>
                  <TextInput
                    style={styles.phoneInput}
                    placeholder="0123456789"
                    placeholderTextColor="#999"
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                  />
                  <TouchableOpacity
                    style={styles.otpButton}
                    onPress={handleSendOtp}
                  >
                    <Text style={styles.otpButtonText}>Request OTP</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>OTP</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="******"
                    placeholderTextColor="#999"
                    secureTextEntry
                    editable={otpSent}
                    value={otp}
                    onChangeText={setOtp}
                    onSubmitEditing={handleLogin}
                  />
                </View>
              </View>

              <View style={styles.rememberForgotContainer}>
                <TouchableOpacity
                  style={styles.rememberMe}
                  onPress={() => setRememberMe(!rememberMe)}
                >
                  <View
                    style={[
                      styles.checkbox,
                      rememberMe && styles.checkboxChecked,
                    ]}
                  >
                    {rememberMe && <Text style={styles.checkmark}>✓</Text>}
                  </View>
                  <Text style={styles.rememberText}>Remember me</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}
              >
                <Text style={styles.loginButtonText}>Log In</Text>
              </TouchableOpacity>

              <Text style={styles.divider}>OR</Text>

              <TouchableOpacity
                style={[styles.socialButton, styles.googleButton]}
                onPress={handleGoogleLogin}
              >
                <Image
                  source={require("../assets/images/google.png")}
                  style={styles.iconImage}
                />
                <Text style={styles.socialButtonText}>
                  Continue with Google
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.socialButton, styles.facebookButton]}
                onPress={handleFacebookLogin}
              >
                <Image
                  source={require("../assets/images/facebook.png")}
                  style={styles.iconImage}
                />
                <Text style={styles.socialButtonText}>
                  Continue with Facebook
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  ) : (
    <View style={styles.container} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  formContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  headerText: {
    fontFamily: "PatrickHandSC",
    fontSize: 40,
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  signupText: {
    fontFamily: "PatrickHandSC",
    fontSize: 20,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  linkText: {
    fontFamily: "PatrickHandSC",
    color: "#1a73e8",
    fontWeight: "500",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontFamily: "PatrickHandSC",
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
  },
  phoneInput: {
    fontFamily: "PatrickHandSC",
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: "#333",
  },
  otpButton: {
    backgroundColor: "transparent",
    marginRight: 4,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  otpButtonText: {
    fontFamily: "PatrickHandSC",
    color: "black",
    fontSize: 14,
    fontWeight: "500",
  },
  input: {
    fontFamily: "PatrickHandSC",
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 12,
    fontSize: 16,
    color: "#333",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
  },
  rememberForgotContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  rememberMe: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#A6AEBF",
    borderRadius: 3,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "#1a73e8",
    borderColor: "#1a73e8",
  },
  checkmark: {
    fontFamily: "PatrickHandSC",
    color: "#FFFFFF",
    fontSize: 12,
  },
  rememberText: {
    fontFamily: "PatrickHandSC",
    fontSize: 16,
    color: "#666",
  },
  loginButton: {
    backgroundColor: "#1a73e8",
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    fontFamily: "PatrickHandSC",
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "500",
  },
  divider: {
    fontFamily: "PatrickHandSC",
    color: "#666",
    textAlign: "center",
    marginVertical: 20,
    position: "relative",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    padding: 12,
    marginBottom: 15,
  },
  googleButton: {
    borderColor: "#ddd",
  },
  facebookButton: {
    borderColor: "#ddd",
  },
  socialIcon: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  socialButtonText: {
    fontFamily: "PatrickHandSC",
    fontSize: 18,
    color: "#333",
  },
  iconImage: {
    width: 28,
    height: 28,
    resizeMode: "contain",
    marginRight: 6,
  },
});

export default LoginScreen;
