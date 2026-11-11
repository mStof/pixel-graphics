/* eslint-disable import/order */
import { NativeTabs } from "expo-router/native-tabs";
import { StatusBar } from "expo-status-bar";

import { Alert, StyleSheet } from "react-native";
import useNunito from "~/src/hooks/useNunito";
import { router } from "expo-router";

export default function TabLayout() {
  const handleRouterAdd = () => {
    router.push("/Add");
  };

  const handleRouterDisabled = () => {
    Alert.alert("Essa opção não está disponivél no OIIII ");
  };
  useNunito();
  return (
    <>
      <StatusBar style="dark" />
      <NativeTabs
        backgroundColor="#B3C0E6"
        labelVisibilityMode="labeled"
        labelStyle={{
          fontFamily: "Nunito_300Light",
          fontSize: 12,
          fontWeight: "light",
        }}
        // screenOptions={{
        //   headerShown: false,
        //   tabBarActiveTintColor: "black",
        //   tabBarShowLabel: false,
        //   tabBarStyle: { ...style.tabBar },
        //   tabBarItemStyle: { ...style.tabBarItem },
      >
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon md="home" />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="two" listeners={{ tabPress: handleRouterAdd }}>
          <NativeTabs.Trigger.Label>Add</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon md="add" />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger disabled name="social" listeners={{ tabPress: handleRouterDisabled }}>
          <NativeTabs.Trigger.Label>Social</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon md="people" selectedColor="#fff" />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger disabled name="menu" listeners={{ tabPress: handleRouterDisabled }}>
          <NativeTabs.Trigger.Label>Menu</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon md="menu" selectedColor="#fff" />
        </NativeTabs.Trigger>
      </NativeTabs>
    </>
  );
}

const style = StyleSheet.create({
  tabBar: {
    backgroundColor: "#B3C0E6",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 60,
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    elevation: 2,
    boxShadow: "0 0 4px -1px rgba(0,0,0,0.25)",
  },
  tabBarItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
