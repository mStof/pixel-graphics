import { Href, Link } from "expo-router";
import { Text, View } from "react-native";
import { ArrowIcon } from "./icons";
import { Nunito_700Bold, useFonts } from "@expo-google-fonts/nunito";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

type HeaderProps = {
  route: Href;
  icon?: React.ReactNode;
  title: string;
  className?: string;
};
SplashScreen.preventAutoHideAsync();

const Header = ({ route, icon, title, className }: HeaderProps) => {
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
    <View className={"flex h-15 w-full flex-row items-center justify-center rounded-e-2xl bg-secondary " + className}>
      <Link href={route} className="absolute left-4">
        {icon ? icon : <ArrowIcon />}
      </Link>
      <Text className="font-Nunito-bold text-xl">{title}</Text>
    </View>
  );
};

export default Header;
