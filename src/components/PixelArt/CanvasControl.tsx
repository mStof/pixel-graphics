import React from "react";
import { View } from "react-native";
import { LeftArrow, RightArrow } from "../icons";
import { useLine } from "~/src/context/useLines";
import { useImageConfig } from "~/src/context/useImageConfig";

const CanvasControl = () => {
  const { line, setLine } = useLine();
  const { height } = useImageConfig();

  return (
    <View className="mb-8 mt-auto flex w-full flex-row justify-between px-8">
      <View
        onTouchEnd={() => line > 0 && setLine("decrese")}
        className="flex items-center justify-center rounded-md bg-secondary px-6 py-3">
        <LeftArrow />
      </View>
      <View
        onTouchEnd={() => line + 1 < height && setLine("increse")}
        className="flex items-center justify-center rounded-md bg-secondary px-6 py-3">
        <RightArrow />
      </View>
    </View>
  );
};

export default CanvasControl;
