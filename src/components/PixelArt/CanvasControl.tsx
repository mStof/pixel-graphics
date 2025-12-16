/* eslint-disable import/order */
import React, { memo } from "react";
import { View } from "react-native";
import { LeftArrow, RightArrow } from "../icons";
import { useLine } from "~/src/context/useLines";
import { useImageConfig } from "~/src/context/useImageConfig";
import Button from "../Button";
import Entypo from "@expo/vector-icons/Entypo";
import { useDatabase } from "~/src/database/useDatabase";

const CanvasControl = () => {
  const { line, setLine } = useLine();
  const {
    image: { id, height, width },
    setHeightPixels,
    setWidthPixels,
  } = useImageConfig();
  const { updateData } = useDatabase();

  const handleUpdate = async (type: "decrese" | "increse") => {
    console.log("btn pressed");
    setLine(type === "increse" ? line + 1 : line - 1);
    try {
      if (type === "decrese") return await updateData({ lines: line - 1, id });
      if (type === "increse") return await updateData({ lines: line + 2, id });
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <View className="mb-8 mt-auto flex w-full flex-row justify-between px-8">
      <Button icon={<LeftArrow />} onPress={() => line > 0 && handleUpdate("decrese")} />
      <View className="bg-red-500">
        <Button
          icon={<Entypo name="plus" size={16} />}
          className="flex h-fit w-fit items-center justify-center rounded-md bg-secondary p-2"
          onPress={() => setWidthPixels("increse")}
        />
        <Button
          icon={<Entypo name="minus" size={16} />}
          className="flex h-fit items-center justify-center rounded-md bg-secondary p-2"
          onPress={() => width > 1 && setWidthPixels("decrese")}
        />
      </View>
      <View className="bg-red-500">
        <Button
          icon={<Entypo name="plus" size={16} />}
          className="flex h-fit w-fit items-center justify-center rounded-md bg-secondary p-2"
          onPress={() => setHeightPixels("increse")}
        />
        <Button
          icon={<Entypo name="minus" size={16} />}
          className="flex h-fit items-center justify-center rounded-md bg-secondary p-2"
          onPress={() => width > 1 && setHeightPixels("decrese")}
        />
      </View>
      <Button icon={<RightArrow />} onPress={() => line + 1 < height && handleUpdate("increse")} />
    </View>
  );
};

export default memo(CanvasControl);
