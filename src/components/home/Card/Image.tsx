import { View, Image } from "react-native";
import React from "react";

type ImageCProps = {
  uri: string;
};

const ImageC = ({ uri }: ImageCProps) => {
  return (
    <View className="aspect-square h-full overflow-hidden rounded-[0.25rem] bg-red-200 object-contain">
      <Image source={{ uri }} className=" h-full w-full" />
    </View>
  );
};

export default ImageC;
