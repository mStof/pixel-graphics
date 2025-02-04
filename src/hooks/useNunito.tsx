import {
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

const useNunito = () => {
  const [loaded, error] = useFonts({ Nunito_300Light, Nunito_400Regular, Nunito_700Bold });
  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;
};

export default useNunito;
