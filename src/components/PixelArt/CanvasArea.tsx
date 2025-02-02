/* eslint-disable import/order */
import React from "react";
import { Dimensions, View } from "react-native";
import { Canvas, Image, Rect, useImage } from "@shopify/react-native-skia";
import Grid from "./Grid";

type CanvasAreaProps = {
  line: number;
};

const CanvasArea = ({ line }: CanvasAreaProps) => {
  const width = Dimensions.get("window").width - 64;
  const height = Dimensions.get("window").width - 64;
  const img = useImage(require("src/assets/poke.png"));
  const pixel = 16;
  const realPixel = height / pixel;

  return (
    <View>
      <Canvas style={{ width, height }}>
        <Image image={img} x={0} y={0} width={width} height={height} />
        <Grid height={height} width={width} />
        <Rect height={realPixel * line} width={width} opacity={0.25} />
        <Rect
          y={(line + 1) * realPixel}
          height={realPixel * (line + 1) * realPixel}
          width={width}
          opacity={0.25}
        />
      </Canvas>
    </View>
  );
};

export default CanvasArea;
