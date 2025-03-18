import React, { forwardRef } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  icon: React.ReactNode | string;
};

const Button = forwardRef<View, ButtonProps>(({ icon, ...TouchableOpacityProps }, ref) => {
  return (
    <TouchableOpacity activeOpacity={0.5}
      ref={ref}
      className="flex h-fit items-center justify-center rounded-md bg-secondary px-6 py-3"
      {...TouchableOpacityProps}>
      {typeof icon === "string" ? (
        <Text className="flex size-4 flex-row items-center justify-center  text-center text-xl leading-none">
          {icon}
        </Text>
      ) : (
        icon
      )}
    </TouchableOpacity>
  );
});

export default Button;
