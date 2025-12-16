/* eslint-disable import/order */
import { Group, Line } from "@shopify/react-native-skia";
import React from "react";
import { useImageConfig } from "~/src/context/useImageConfig";

type GridType = {
  canvasWidth: number;
  canvasHeight: number;
};

const Grid = ({ canvasWidth, canvasHeight }: GridType) => {
  const {
    image: { height, width, uriConfig },
  } = useImageConfig();
  const linesX = [];
  const linesY = [];
  const pixelX = width;
  const pixelY = height;
  const widthGrid = (canvasHeight * uriConfig.width) / uriConfig.height;
  const spaceGrid = (canvasWidth - widthGrid) / 2;

  for (let i = 1; i < pixelX; i++) {
    linesX.push(
      <Line
        key={i}
        p1={{ x: (widthGrid / pixelX) * i, y: 0 }}
        p2={{ x: (widthGrid / pixelX) * i, y: canvasHeight }}
        color={(widthGrid / pixelX) * i === widthGrid ? "transparent" : "rgba(0, 0, 0, 0.15)"}
      />
    );
  }

  for (let i = 1; i < pixelY; i++) {
    linesY.push(
      <Line
        key={i}
        p1={{ y: (canvasHeight / pixelY) * i, x: 0 }}
        p2={{ y: (canvasHeight / pixelY) * i, x: widthGrid }}
        color={(canvasHeight / pixelY) * i === canvasHeight ? "transparent" : "rgba(0, 0, 0, 0.15)"}
      />
    );
  }

  return (
    <Group transform={[{ translateX: spaceGrid }]}>
      {linesX}
      {linesY}
    </Group>
  );
};

export default Grid;
