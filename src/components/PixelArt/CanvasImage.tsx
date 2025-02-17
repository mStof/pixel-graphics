/* eslint-disable import/order */
import { Image, Skia, SkImage } from "@shopify/react-native-skia";
import React, { useEffect, useState } from "react";
import { useImageConfig } from "~/src/context/useImageConfig";
import * as MediaLibrary from "expo-media-library";

type CanvasImageProps = {
  width: number;
  height: number;
};

const CanvasImage = ({ width, height }: CanvasImageProps) => {
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const { uriConfig } = useImageConfig();
  const [img, setImg] = useState<SkImage | null>(null);

  useEffect(() => {
    if (!status) requestPermission();
    const loadImg = async () => {
      const imageData = await Skia.Data.fromURI(uriConfig.uri);
      const image = Skia.Image.MakeImageFromEncoded(imageData);
      setImg(image);
    };
    loadImg();
  }, [status]);

  return <Image image={img} x={0} y={0} width={width} height={height} fit="contain" />;
};

export default CanvasImage;
