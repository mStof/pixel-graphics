/* eslint-disable import/order */
import React from "react";
import { Dimensions, Text, View } from "react-native";
import { Canvas, Rect } from "@shopify/react-native-skia";
import Grid from "./Grid";
import CanvasImage from "./CanvasImage";
import { useLine } from "~/src/context/useLines";
import { useImageConfig } from "~/src/context/useImageConfig";

const CanvasArea = () => {
  const { image } = useImageConfig();
  const width = Dimensions.get("window").width - 64;
  const height = width;
  const realPixel = height / Number(image.height);
  const { line } = useLine();

  return (
    <>
      <View className="relative h-fit w-fit rounded-md bg-secondary">
        <Text className="absolute left-[77%] -translate-y-full font-Nunito-bold text-xs text-text">
          {image.width}x{image.height}
        </Text>
        <Canvas style={{ width, height }}>
          <CanvasImage width={width} height={height} />
          <Grid canvasHeight={height} canvasWidth={width} />
          <Rect height={realPixel * line} width={width} opacity={0.25} />
          <Rect
            y={(line + 1) * realPixel}
            height={height - (line + 1) * realPixel}
            width={width}
            opacity={0.25}
          />
        </Canvas>
      </View>
    </>
  );
};

export default CanvasArea;
