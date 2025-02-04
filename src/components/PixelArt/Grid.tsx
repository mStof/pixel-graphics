import { Line } from "@shopify/react-native-skia";
import React from "react";
import { useImageConfig } from "~/src/context/useImageConfig";

type GridType = {
  canvasWidth: number;
  canvasHeight: number;
};

const Grid = ({ canvasWidth, canvasHeight }: GridType) => {
  const { height, width } = useImageConfig();
  const linesX = [];
  const linesY = [];
  const pixelX = width;
  const pixelY = height;

  for (let i = 1; i < pixelX; i++) {
    linesX.push(
      <Line
        key={i}
        p1={{ x: (canvasWidth / pixelX) * i, y: 0 }}
        p2={{ x: (canvasWidth / pixelX) * i, y: canvasHeight }}
        color={(canvasWidth / pixelX) * i === canvasWidth ? "transparent" : "rgba(0, 0, 0, 0.15)"}
      />
    );
  }

  for (let i = 1; i < pixelY; i++) {
    linesY.push(
      <Line
        key={i}
        p1={{ y: (canvasHeight / pixelY) * i, x: 0 }}
        p2={{ y: (canvasHeight / pixelY) * i, x: canvasWidth }}
        color={(canvasHeight / pixelY) * i === canvasHeight ? "transparent" : "rgba(0, 0, 0, 0.15)"}
      />
    );
  }

  return (
    <>
      {linesX}
      {linesY}
    </>
  );
};

export default Grid;
