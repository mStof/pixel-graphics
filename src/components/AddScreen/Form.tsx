/* eslint-disable import/order */
import React, { useRef } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Input from "./Input";
import { useForm } from "react-hook-form";

const Form = () => {
  const { control, handleSubmit } = useForm();

  const widthRef = useRef<TextInput>(null);
  const heightRef = useRef<TextInput>(null);

  const handleRealize = (data: any) => {
    console.log(data);
  };

  return (
    <View className="flex flex-1 flex-col gap-6">
      <Input
        title="Title"
        formProps={{ name: "title", control }}
        textInputProps={{
          placeholder: "My cool pixel art ;)",
          onSubmitEditing: () => widthRef.current?.focus(),
          returnKeyType: "next",
        }}
      />
      <View className="flex flex-row ">
        <Input
          title="Pixel art"
          classNameView="!w-1/2"
          formProps={{ name: "PixelArt", control }}
          textInputProps={{ placeholder: "Choose a file " }}
          isFile
        />
        <View className="flex w-1/2 flex-row gap-4 pr-8">
          <Input
            ref={widthRef}
            title="W(px)"
            classNameView="!w-1/2 !px-0 "
            formProps={{ name: "width", control }}
            textInputProps={{
              placeholder: "16",
              inputMode: "numeric",
              textAlign: "center",
              className: "!pl-0",
              onSubmitEditing: () => heightRef.current?.focus(),
              returnKeyType: "next",
            }}
          />
          <Input
            title="H(px)"
            classNameView="!w-1/2 !px-0"
            formProps={{ name: "height", control }}
            textInputProps={{
              placeholder: "99",
              inputMode: "numeric",
              textAlign: "center",
              className: "!pl-0",
            }}
          />
        </View>
      </View>
      <View className="mb-8 mt-auto px-4">
        <TouchableOpacity onPress={handleSubmit(handleRealize )} className=" flex h-15 flex-col items-center justify-center rounded-lg bg-secondary ">
          <Text className="font-Nunito-light text-xl text-text">Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Form;
