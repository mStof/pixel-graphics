/* eslint-disable import/order */
import "../../global.css";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import useNunito from "../hooks/useNunito";
import { Suspense } from "react";
import { ActivityIndicator } from "react-native";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useNunito();

  return (
    <Suspense fallback={<ActivityIndicator size="large" />}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="Add" options={{ animation: "slide_from_bottom" }} />
      </Stack>
    </Suspense>
  );
}
