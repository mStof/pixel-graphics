/* eslint-disable import/order */
import React, { useRef } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Input from "./Input";
import { useForm } from "react-hook-form";
import FileInput from "./FileInput";
import { router } from "expo-router";
import { useImageConfig } from "~/src/context/useImageConfig";

const Form = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const widthRef = useRef<TextInput>(null);
  const heightRef = useRef<TextInput>(null);
  const { setImageConfig } = useImageConfig();

  const handleRealize = (data: any) => {
    if (!data.uri) setError("uri", { type: "required", message: "Obrigatório" });
    setImageConfig({
      height: Number(data.height),
      width: Number(data.width),
      uri: data.uri,
      title: data.title,
    });
    router.push({ pathname: "/Pixelart", params: data });
  };

  return (
    <View className="mt-8 flex flex-1 flex-col gap-6">
      <Input
        error={errors.title?.message}
        title="Title"
        formProps={{
          name: "title",
          control,
          rules: {
            required: "Nome é obrigatório",
          },
        }}
        textInputProps={{
          placeholder: "My cool pixel art ;)",
          onSubmitEditing: () => widthRef.current?.focus(),
          returnKeyType: "next",
        }}
      />
      <View className="flex flex-row">
        <FileInput
          error={errors.uri?.message}
          setForm={{ setValue, clearErrors }}
          formProps={{ name: "uri", control }}
          title="Pixel art"
          className="!w-1/2"
          placeholder="Choose a file"
        />
        <View className="flex w-1/2 flex-row gap-4 pr-8">
          <Input
            error={errors.width?.message}
            ref={widthRef}
            title="W(px)"
            classNameView="!w-1/2 !px-0 "
            formProps={{
              name: "width",
              control,
              rules: {
                required: "Obrigatório",
              },
            }}
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
            error={errors.height?.message}
            title="H(px)"
            classNameView="!w-1/2 !px-0"
            formProps={{
              name: "height",
              control,
              rules: {
                required: "Obrigatório",
              },
            }}
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
        <TouchableOpacity
          onPress={handleSubmit(handleRealize)}
          className=" flex h-15 flex-col items-center justify-center rounded-lg bg-secondary ">
          <Text className="font-Nunito-light text-xl text-text">Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Form;
