import { Text } from "react-native";
import React from "react";

const Title = ({ children }: { children: string }) => {
  return (
    <Text className="-mt-0.5 bg-red-00 h-fit font-Nunito-bold text-lg text-text">{children}</Text>
  );
};

export default Title;
