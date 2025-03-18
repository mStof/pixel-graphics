import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { Alert, View } from "react-native";

import Button from "../../Button";

import { useImageConfig } from "~/src/context/useImageConfig";
import { CardType } from "~/src/database/initDB";
import { useDatabase } from "~/src/database/useDatabase";

type ButtonProps = {
  cardSQL: CardType;
  refresh: () => void;
};
const Buttons = ({ cardSQL, refresh }: ButtonProps) => {
  const { setImageConfig } = useImageConfig();
  const { height_px, width_px, name, image, real_height, real_width, filename } = cardSQL;
  const { deleteData } = useDatabase();

  const handleDelete = async () => {
    Alert.alert(`Deleting card with id: ${cardSQL.id}`, "Quer mesmo deletar o card?", [
      {
        text: "Deletar",
        style: "cancel",
        onPress: async () => {
          try {
            await deleteData(cardSQL.id);
          } catch (err) {
            console.log(err);
          } finally {
            refresh();
          }
        },
      },
    ]);
  };
  console.log("cardSQL: ");
  console.log(cardSQL);

  const handleEnter = () => {
    setImageConfig({
      height: height_px,
      width: width_px,
      uriConfig: { fileName: filename, uri: image, height: real_height, width: real_width },
      title: name,
    });
    router.push("/Pixelart");
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
