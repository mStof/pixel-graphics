/* eslint-disable import/order */
import "../../global.css";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import useNunito from "../hooks/useNunito";
import { Suspense } from "react";
import { SQLiteProvider } from "expo-sqlite";
import { ActivityIndicator } from "react-native";
import { InitDB } from "../database/initDB";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useNunito();

  return (
    <Suspense fallback={<ActivityIndicator size="large" />}>
      <SQLiteProvider databaseName="database.db" onInit={InitDB}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="Add" options={{ animation: "slide_from_bottom" }} />
        </Stack>
      </SQLiteProvider>
    </Suspense>
  );
}
