/* eslint-disable import/order */
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { CloseIcon } from "../components/icons";
import Form from "../components/AddScreen/Form";
import { StatusBar } from "expo-status-bar";

export default function Modal() {
  return (
    <>
      <SafeAreaView edges={["top"]} className="flex-0 bg-secondary" />
      <SafeAreaView edges={["bottom", "left", "right"]} className="flex-1 bg-primary">
        <StatusBar />
        <Header route="/(tabs)" title="Pixel creation" icon={<CloseIcon />} />
        <Form />
      </SafeAreaView>
    </>
  );
}
