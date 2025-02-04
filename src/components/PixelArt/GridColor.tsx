import { AlphaType, ColorType, Skia, SkImage } from "@shopify/react-native-skia";
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { useImageConfig } from "~/src/context/useImageConfig";
import { useLine } from "~/src/context/useLines";
import * as MediaLibrary from "expo-media-library";

const GridColor = () => {
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [image, setImg] = useState<SkImage | null>(null);
  const { height, width } = useImageConfig();
  const { uri } = useImageConfig();
  const pHeight = height;
  const pWidth = width;
  const { line } = useLine();
  const colorsArr = [];
  let linesArr = [];

  useEffect(() => {
    if (!status) requestPermission();
    const loadImg = async () => {
      console.log("await image", uri);
      const imageData = await Skia.Data.fromURI(uri);
      const image = Skia.Image.MakeImageFromEncoded(imageData);
      setImg(image);
      console.log("loaded image");
    };
    loadImg();
  }, [status]);

  if (image) {
    const realPixelX = image.width() / pWidth;
    const realPixelY = image.height() / pHeight;
    for (let i = 0; i < pWidth; i++) {
      const pixelXRead = (realPixelX / 2) * (1 + i * 2);
      const pixels = image.readPixels(pixelXRead, realPixelY * line + 1, {
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
      if (i + 1 === pWidth) colorsArr.push(linesArr);
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
            <View key={index} className="flex h-fit w-full flex-row items-center justify-around">
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
