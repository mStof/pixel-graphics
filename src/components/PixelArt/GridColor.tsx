import { AlphaType, ColorType, useImage } from "@shopify/react-native-skia";
import React from "react";
import { ScrollView, View } from "react-native";

const GridColor = ({ line }: { line: number }) => {
  const colorsArr = [];
  let linesArr = [];
  const img = useImage(require("src/assets/poke.png"));
  const pixel = 16;

  if (img) {
    const realPixelX = img.width() / pixel;
    const realPixelY = img.height() / pixel;
    for (let i = 0; i < pixel; i++) {
      const pixelXRead = (realPixelX / 2) * (1 + i * 2);
      const pixels = img.readPixels(pixelXRead, realPixelY * line, {
        colorType: ColorType.RGBA_8888,
        alphaType: AlphaType.Premul,
        height: 1,
        width: 1,
      });

      if (!pixels) break;
      const [r, g, b, a] = pixels;

      if (linesArr.length === 8) {
        colorsArr.push(linesArr);
        linesArr = [];
        linesArr.push(`rgba(${r}, ${g}, ${b}, ${a})`);
      } else linesArr.push(`rgba(${r}, ${g}, ${b}, ${a})`);
      if (i + 1 === pixel) colorsArr.push(linesArr);
    }
  }

  return (
    <View className="flex h-fit w-full flex-col gap-4">
      <View className="h-2 w-full rounded-full bg-secondary" />
      <ScrollView
        contentContainerClassName="flex gap-3 px-4 flex-wrap"
        className="h-fit max-h-56 w-full">
        {colorsArr.map((linesArr, index) => {
          return (
            <View
              key={index}
              className="flex flex h-fit w-full flex-row items-center justify-around">
              {linesArr.map((color, colorIndex) => {
                return (
                  <View
                    key={colorIndex}
                    style={{ backgroundColor: color }}
                    className="size-8 rounded-[0.25rem]"
                  />
                );
              })}
            </View>
          );
        })}
      </ScrollView>
      <View className="h-2 w-full rounded-full bg-secondary" />
    </View>
  );
};

export default GridColor;
