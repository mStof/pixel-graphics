import React from "react";
import { View } from "react-native";
import { LeftArrow, RightArrow } from "../icons";

type CanvasControlProps = {
  onTouch: React.Dispatch<React.SetStateAction<number>>;
  line: number;
  pixel: number;
};

const CanvasControl = ({ onTouch, line, pixel }: CanvasControlProps) => {
  return (
    <View className="mt-auto mb-8 flex w-full flex-row justify-between px-8">
      <View
        onTouchEnd={() => line > 0 && onTouch(line - 1)}
        className="flex items-center justify-center rounded-md bg-secondary px-6 py-3">
        <LeftArrow />
      </View>
      <View
        onTouchEnd={() => line + 1 < pixel && onTouch(line + 1)}
        className="flex items-center justify-center rounded-md bg-secondary px-6 py-3">
        <RightArrow />
      </View>
    </View>
  );
};

export default CanvasControl;
