import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';

type TabIconsProps = {
  text: string;
  icon: ReactNode;
};

const TabBarIcon = ({ icon, text }: TabIconsProps) => {
  return (
    <View className="flex flex-col items-center gap-1">
      {icon}
      <Text className="font-Nunito-light text-text text-nowrap text-xs font-light">{text}</Text>
    </View>
  );
};

export { TabBarIcon };
