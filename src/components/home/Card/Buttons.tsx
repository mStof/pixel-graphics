import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { Alert, View } from "react-native";

import Button from "../../Button";

import { useImageConfig } from "~/src/context/useImageConfig";
import { useLine } from "~/src/context/useLines";

type ButtonProps = {
  refresh: () => void;
};

const Buttons = ({ refresh }: ButtonProps) => {
  // const { setImageConfig } = useImageConfig();
  // const { setLine } = useLine();


  const handleDelete = async () => {
    Alert.alert(`Deletar o card ---`, "Quer mesmo deletar o card?", [
      {
        text: "Deletar",
        style: "destructive",
        onPress: async () => {
          try {
            throw {err: "não implementado"}
          } catch (err) {
            console.log(err);
          } finally {
            refresh();
          }
        },
      },
      {
        text: "Cancelar",
        style: "cancel",
        onPress: async () => {},
      },
    ]);
  };

  const handleEnter = () => {
    Alert.alert("Desabilitado");
  };

  return (
    <View className="flex gap-1">
      <Button
        style={{ elevation: 2 }}
        icon={<Ionicons name="close" color="#fff" size={16} />}
        className="flex aspect-square flex-1 items-center justify-center rounded-[0.25rem] bg-cancel"
        onPress={handleDelete}
      />
      <Button
        style={{ elevation: 2 }}
        icon={<Ionicons name="chevron-forward-outline" color="#fff" size={16} />}
        className="flex aspect-square flex-1 items-center justify-center rounded-[0.25rem] bg-agree"
        onPress={handleEnter}
      />
    </View>
  );
};

export default Buttons;
