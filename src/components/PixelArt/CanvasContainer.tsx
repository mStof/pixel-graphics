import React from "react";
import { View } from "react-native";
import CanvasArea from "./CanvasArea";
import GridColor from "./GridColor";

const CanvasContainer = () => {
  return (
    <View className="mt-8 flex h-fit w-min flex-col items-center justify-center gap-4 px-4">
      <CanvasArea />
      <GridColor />
    </View>
  );
};

export default CanvasContainer;
