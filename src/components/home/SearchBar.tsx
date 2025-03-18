import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { TextInput, View } from "react-native";

type SearchBarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  return (
    <View className="flex h-auto w-full flex-col items-center justify-center rounded-e-2xl bg-secondary p-4">
      <View className=" w-full flex-row items-center gap-2 overflow-hidden rounded-full bg-[rgba(0,0,0,0.15)] px-4 ">
        <Ionicons name="search" size={16} />
        <TextInput
          className="h-full w-full py-2 pr-6 font-Nunito-light text-base"
          placeholder="Pesquisar..."
          returnKeyType="search"
          value={search}
          onChangeText={setSearch}
        />
      </View>
    </View>
  );
};

export default SearchBar;
