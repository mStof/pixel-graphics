import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "~/src/components/home/Card";
import SearchBar from "~/src/components/home/SearchBar";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <StatusBar backgroundColor="#B3C0E6" />
      <SearchBar />
      <ScrollView className="flex-1 pt-6 px-4" contentContainerClassName="flex-col flex gap-4">
        <Card/>
      </ScrollView>
    </SafeAreaView>
  );
}
