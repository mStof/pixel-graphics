import { Nunito_300Light, useFonts } from "@expo-google-fonts/nunito";
import { SplashScreen } from "expo-router";
import React, { forwardRef, useEffect } from "react";
import { View, TextInput, Text, TextInputProps, TouchableOpacity } from "react-native";
import { Controller, UseControllerProps } from "react-hook-form";
import { pick } from "@react-native-documents/picker";

SplashScreen.preventAutoHideAsync();

type InputProps = {
  title?: string;
  textInputProps: TextInputProps;
  formProps: UseControllerProps;
  classNameView?: string;
  isFile?: boolean;
};

const Input = forwardRef<TextInput, InputProps>(
  ({ title, formProps, textInputProps, classNameView, isFile = false }, ref) => {
    const { className, ...textInputPropsRest } = textInputProps;
    const [loaded, error] = useFonts({ Nunito_300Light });
    useEffect(() => {
      if (loaded || error) SplashScreen.hideAsync();
    }, [loaded, error]);

    if (!loaded && !error) return null;

    const fileHandle = async () => {
      try {
        const [pickResult] = await pick();
        console.log(pickResult);
      } catch (err: unknown) {
        console.log(err);
      }
    };

    return (
      <Controller
        render={({ field }) => (
          <View className={"flex w-full flex-col gap-1 px-4 " + classNameView}>
            <Text className="font-Nunito-light text-xl leading-normal text-text">{title}</Text>
            {isFile ? (
              <TouchableOpacity
                onPress={() => {}}
                className="flex h-15 flex-col items-center justify-center rounded-md bg-secondary ">
                <Text className="font-Nunito-light text-xl text-text opacity-65">
                  {textInputProps.placeholder}
                </Text>
              </TouchableOpacity>
            ) : (
              <TextInput
                ref={ref}
                value={field.value}
                onChangeText={field.onChange}
                className={
                  "h-15 rounded-md bg-secondary pl-3 text-xl text-text placeholder:font-Nunito-light " +
                  className
                }
                {...textInputPropsRest}
              />
            )}
          </View>
        )}
        {...formProps}
      />
    );
  }
);

export default Input;
