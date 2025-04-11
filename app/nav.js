import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Home, MessageSquare, User } from "react-native-feather";
import { useRouter, usePathname } from "expo-router";

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path || pathname.startsWith(path);
  };

  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => router.push("/")}
        accessibilityLabel="Home tab"
      >
        <Home
          stroke={isActive("/index") ? "#000" : "#888"}
          width={24}
          height={24}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => router.push("/chat")}
        accessibilityLabel="Chats tab"
      >
        <MessageSquare
          stroke={isActive("/chat") ? "#000" : "#888"}
          width={24}
          height={24}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => router.push("/profile")}
        accessibilityLabel="Profile tab"
      >
        <User
          stroke={isActive("/profile") ? "#000" : "#888"}
          width={24}
          height={24}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#f0f0d0",
    borderTopWidth: 1,
    borderTopColor: "#e0e0c0",
  },
  tabButton: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Nav;
