import { Image, Skia, SkImage, useImage } from "@shopify/react-native-skia";
import { readAsStringAsync } from "expo-file-system";
import React, { useEffect, useState } from "react";
import { useImageConfig } from "~/src/context/useImageConfig";
import * as FileSystem from "expo-file-system";

type CanvasImageProps = {
  width: number;
  height: number;
};

const CanvasImage = ({ width, height }: CanvasImageProps) => {
  const { uri } = useImageConfig();
  const fileImg = uri.replace("file:///", "file://");
  const [img, setImg] = useState<SkImage | null>(null);
  const [existe, setExiste] = useState<boolean | null>(null);

  useEffect(() => {
    const checarArquivo = async () => {
      try {
        const info = await FileSystem.getInfoAsync(uri);
        setExiste(info.exists);
      } catch (error) {
        console.error("Erro ao verificar a URI:", error);
        setExiste(false);
        console.log(existe);
      }
    };
    checarArquivo();
  }, [existe]);

  //   const loadImg = async () => {
  //       console.log('await image', fileImg);
  //     const imageData = await Skia.Data.fromURI(fileImg);
  //     const image = Skia.Image.MakeImageFromEncoded(imageData);
  //     setImg(image);
  //     console.log('loaded image');

  //   };
  //   const load = async () => {
  //     console.log("await", img);
  //     const imageData = await Skia.Data.fromURI(fileImg);
  //     const image = Skia.Image.MakeImageFromEncoded(imageData);
  //     return image;
  //   };
  //   useEffect(() => {
  //     load().then((img) => setImg(img));
  //   }, [img]);
  //   const loadImg = async () => {
  //     console.log(image.replace("file:///", "file://"));
  //     const img64 = await readAsStringAsync(image.replace("file:///", "file://"), {
  //       encoding: "base64",
  //     });
  //     const imgData = Skia.Data.fromBase64(img64);
  //     setImg(Skia.Image.MakeImageFromEncoded(imgData));
  //   };

  //   useEffect(() => {
  //     loadImg();
  //   }, [img]);

  return <Image image={img} x={0} y={0} width={width} height={height} />;
};

export default CanvasImage;
