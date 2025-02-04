import React, { forwardRef } from "react";
import {
  Controller,
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseControllerProps,
} from "react-hook-form";
import { View, TextInput, Text, TextInputProps } from "react-native";

import useNunito from "~/src/hooks/useNunito";

type InputProps = {
  title?: string;
  textInputProps: TextInputProps;
  formProps: UseControllerProps;
  classNameView?: string;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
};

const Input = forwardRef<TextInput, InputProps>(
  ({ title, formProps, textInputProps, classNameView, error = "" }, ref) => {
    const { className, ...textInputPropsRest } = textInputProps;
    useNunito();

    return (
      <Controller
        render={({ field }) => (
          <View className={"flex w-full flex-col gap-1 px-4 " + classNameView}>
            <Text className="font-Nunito-light text-xl leading-normal text-text">{title}</Text>
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
            {error && (
              <Text className="font-Nunito-bold text-xs text-red-800">{error.toString()}</Text>
            )}
          </View>
        )}
        {...formProps}
      />
    );
  }
);

export default Input;
