import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import CardList from "~/src/components/home/CardList";
import SearchBar from "~/src/components/home/SearchBar";

export default function Home() {
    const [search, setSearch] = useState("")
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <StatusBar backgroundColor="#B3C0E6" />
      <SearchBar search={search} setSearch={setSearch}/>
      <CardList search={search} />
    </SafeAreaView>
  );
}
