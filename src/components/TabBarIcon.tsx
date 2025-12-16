import React, { ReactNode } from "react";
import { Text, View } from "react-native";

type TabIconsProps = {
  text: string;
  icon: ReactNode;
  disable?: boolean;
};

const TabBarIcon = ({ icon, text, disable }: TabIconsProps) => {
  return (
    <View className={`flex flex-col items-center gap-1 ${disable && "opacity-50"}`}>
      {icon}
      <Text className="text-nowrap font-Nunito-light text-xs font-light text-text">{text}</Text>
    </View>
  );
};

export { TabBarIcon };
