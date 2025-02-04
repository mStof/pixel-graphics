/* eslint-disable import/order */
import React, { useRef } from "react";
import { Dimensions, Image, View } from "react-native";
import { Canvas, Rect } from "@shopify/react-native-skia";
import Grid from "./Grid";
import CanvasImage from "./CanvasImage";
import { useLine } from "~/src/context/useLines";
import { useImageConfig } from "~/src/context/useImageConfig";

const CanvasArea = () => {
  const imgRef = useRef<Image>(null);
  const config = useImageConfig();
  const width = Dimensions.get("window").width - 64;
  const height = width;
  const realPixel = height / Number(config.height);
  const { line } = useLine();
  const { uri } = useImageConfig();

  return (
    <View className="relative h-fit w-fit overflow-hidden rounded-2xl bg-secondary">
      <Image
        ref={imgRef}
        source={{ uri }}
        style={{ width, height, position: "absolute", objectFit: "contain" }}
        width={width}
        height={height}
      />
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
  );
};

export default CanvasArea;
