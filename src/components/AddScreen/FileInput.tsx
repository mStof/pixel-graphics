/* eslint-disable import/order */
import React from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseControllerProps,
  UseFormClearErrors,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";
import useNunito from "~/src/hooks/useNunito";
import { View, Text, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

type FileInputProps = {
  title?: string;
  formProps: UseControllerProps;
  className?: string;
  placeholder?: string;
  setForm: {
    setValue: UseFormSetValue<FieldValues>;
    clearErrors: UseFormClearErrors<FieldValues>;
  };
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
};

const FileInput = ({
  title,
  formProps,
  placeholder,
  className,
  setForm,
  error = "",
}: FileInputProps) => {
  useNunito();
  const { setValue, clearErrors } = setForm;
  const fileHandle = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: "images",
        quality: 1,
        selectionLimit: 1,
      });
      if (result.canceled) return console.log("Image Library cancelled");
      setValue(formProps.name, result.assets[0].uri);
      clearErrors(formProps.name);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View className={"flex w-full flex-col gap-1 px-4 " + className}>
      <Text className="font-Nunito-light text-xl leading-normal text-text">{title}</Text>
      <TouchableOpacity
        onPress={fileHandle}
        className="flex h-15 flex-col items-center justify-center rounded-md bg-secondary ">
        <Text className="font-Nunito-light text-xl text-text opacity-65">{placeholder}</Text>
      </TouchableOpacity>
      {error && <Text className="font-Nunito-bold text-xs text-red-800">{error.toString()}</Text>}
    </View>
  );
};

export default FileInput;
