import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { CloseIcon } from "../components/icons";
import Form from "../components/AddScreen/Form";

export default function Modal() {
  return (
    <>
      <SafeAreaView edges={["top"]} className="flex-0 bg-secondary" />
      <SafeAreaView edges={["bottom", "left", "right"]} className="flex-1 bg-primary">
        <Header route="/(tabs)" title="Pixel creation" icon={<CloseIcon />} />
        <Link href="/Pixelart" className="bg-slate-600 p-8 text-2xl text-white">
          Va pra pqp
        </Link>
        <Form />
      </SafeAreaView>
    </>
  );
}
