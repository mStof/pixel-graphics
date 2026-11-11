import { useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import CardList from "~/src/components/home/CardList";
import SearchBar from "~/src/components/home/SearchBar";

export default function Home() {
  const { top } = useSafeAreaInsets({ cornerAdaptation: "vertical" });
  const [search, setSearch] = useState("");

  return (
    <View style={{ paddingTop: top }} className="flex-1 bg-secondary">
      <SearchBar search={search} setSearch={setSearch} />
      <CardList search={search} />
    </View>
  );
}
