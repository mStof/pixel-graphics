/* eslint-disable import/order */
import React, { memo, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import CanvasContainer from "../components/PixelArt/CanvasContainer";
import CanvasControl from "../components/PixelArt/CanvasControl";
import { router } from "expo-router";
import { useBackHandler } from "@react-native-community/hooks";
import { useImageConfig } from "../context/useImageConfig";

const Pixelart = () => {
  const { title } = useImageConfig();

console.log("Render")

  useBackHandler(() => {
    router.push("/(tabs)");
    return true;
  });

  return (
    <>
      <SafeAreaView edges={["top"]} className="flex-0 bg-secondary" />
      <SafeAreaView edges={["bottom", "left", "right"]} className="flex flex-1 flex-col bg-primary">
        <StatusBar />
        <Header route="/(tabs)" title={title} />
        <CanvasContainer />
        <CanvasControl />
      </SafeAreaView>
    </>
  );
}

export default memo(Pixelart);
