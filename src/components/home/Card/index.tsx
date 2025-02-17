import React from "react";
import { Image, Text, View } from "react-native";
import Button from "../../Button";
import Ionicons from "@expo/vector-icons/Ionicons";

const Card = () => {
  return (
    <View className="relative flex h-16 w-full flex-row gap-2 rounded-xl bg-white p-2">
      <View className="aspect-square h-full overflow-hidden rounded-[0.25rem] bg-red-100 object-contain">
        <Image source={require("src/assets/poke.png")} className=" h-full w-full" />
      </View>

      <View className="flex flex-1 justify-between">
        <Text className="font-Nunito-bold leading-none text-text">Lorem Ipsum dor</Text>

        <View className="flex -translate-y-0.5 flex-row gap-0.5">
          <View className="h-1.5 w-7 rounded-sm bg-secondary" />
          <View className="h-1.5 w-5 rounded-sm bg-secondary" />
          <View className="h-1.5 w-6 rounded-sm bg-secondary" />
        </View>

        <View className="flex h-fit flex-row items-center gap-1 ">
          <View className="h-1.5 w-28 overflow-hidden rounded-full bg-[#929CBB]">
            <View className="h-full w-1/2 bg-secondary" />
          </View>
          <Text className="font-Nunito-light text-xs leading-tight text-text">50%</Text>
        </View>
      </View>
      <View className="flex gap-1">
        <Button
          icon={<Ionicons name="close" color="#fff" />}
          className="flex aspect-square flex-1 items-center justify-center rounded-[0.25rem] bg-cancel"
        />
        <Button
          icon={<Ionicons name="chevron-forward-outline" color="#fff" />}
          className="flex aspect-square flex-1 items-center justify-center rounded-[0.25rem] bg-agree"
        />
      </View>
    </View>
  );
};

export default Card;
