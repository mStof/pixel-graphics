import { View, Text, StyleSheet } from "react-native";
import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <View
      className="relative flex h-20 w-full flex-row gap-2 rounded-xl bg-white p-2"
      style={styles.shadow}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,

    elevation: 1,
  },
});
export default Container;
