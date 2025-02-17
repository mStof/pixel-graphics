import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { TextInput, View } from "react-native";

const SearchBar = () => {
  return (
    <View className="flex h-15 w-full flex-col items-center justify-center rounded-e-2xl bg-secondary px-4">
      <View className="h-8 w-full flex-row items-center gap-2 overflow-hidden rounded-full bg-[rgba(0,0,0,0.15)] px-4 ">
        <Ionicons name="search" size={16} />
        <TextInput
          className="h-full w-full pr-6 font-Nunito-light text-base"
          placeholder="Pesquisar..."
          returnKeyType="search"
        />
      </View>
    </View>
  );
};

export default SearchBar;
