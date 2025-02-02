/* eslint-disable import/order */
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/PixelArt/Header";
import CanvasContainer from "../components/PixelArt/CanvasContainer";
import CanvasControl from "../components/PixelArt/CanvasControl";
import { router } from "expo-router";
import { useBackHandler } from "@react-native-community/hooks";

export default function Pixelart() {
  const pixel = 16;
  const [line, setLine] = useState<number>(0);
  useBackHandler(() => {
    router.push("/(tabs)");
    return true;
  });

  return (
    <>
      <SafeAreaView edges={["top"]} className="flex-0 bg-secondary" />
      <SafeAreaView edges={["bottom", "left", "right"]} className="flex flex-1 flex-col bg-primary">
        <StatusBar />
        <Header />
        <CanvasContainer line={line} />
        <CanvasControl pixel={pixel} line={line} onTouch={setLine} />
      </SafeAreaView>
    </>
  );
}
