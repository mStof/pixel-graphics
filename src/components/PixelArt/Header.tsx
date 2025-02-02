import { Link } from "expo-router";
import { Text, View } from "react-native";
import { ArrowIcon } from "../icons";
import { Nunito_700Bold, useFonts } from "@expo-google-fonts/nunito";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

const Header = () => {
  SplashScreen.preventAutoHideAsync();
  const [loaded, error] = useFonts({
    Nunito_700Bold,
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View className="flex h-15 w-full flex-row items-center justify-center rounded-e-2xl bg-secondary">
      <Link href="/(tabs)" className="absolute left-4">
        <ArrowIcon />
      </Link>
      <Text className="font-Nunito-bold text-xl">My pixel art cool ;)</Text>
    </View>
  );
};

export default Header;
