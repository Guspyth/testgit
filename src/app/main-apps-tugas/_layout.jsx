import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import "react-native-reanimated";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: "#49745e",
        drawerInactiveTintColor: "gray",
        drawerStyle: {
          backgroundColor: "#f8f6f1",
          width: 250,
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "600",
        },
        headerStyle: {
          backgroundColor: "#49745e",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {/* Menu 1: Home */}
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Menu 2: Katalog Buku */}
      <Drawer.Screen
        name="catalog"
        options={{
          drawerLabel: "Katalog Buku",
          title: "Katalog Buku",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Menu 3: Buku Premium */}
      <Drawer.Screen
        name="premium"
        options={{
          drawerLabel: "Buku Premium",
          title: "Buku Premium",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Explore — disembunyikan dari drawer */}
      <Drawer.Screen
        name="explore"
        options={{
          drawerLabel: "Explore",
          title: "Explore",
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer>
  );
}
