import { Line } from "@shopify/react-native-skia";
import React from "react";

type GridType = {
  width: number;
  height: number;
};

const Grid = ({ width, height }: GridType) => {
  const linesX = [];
  const linesY = [];
  for (let i = 1; i < width / 16; i++) {
    linesX.push(
      <Line
        key={i}
        p1={{ x: (width / 16) * i, y: 0 }}
        p2={{ x: (width / 16) * i, y: height }}
        color={(width / 16) * i === width ? "transparent" : "blue"}
      />
    );
  }

  for (let i = 1; i < height / 16; i++) {
    linesY.push(
      <Line
        key={i}
        p1={{ y: (height / 16) * i, x: 0 }}
        p2={{ y: (height / 16) * i, x: width }}
        color={(height / 16) * i === height ? "transparent" : "blue"}
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
