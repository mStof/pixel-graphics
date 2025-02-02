/* eslint-disable import/order */
import { router, Tabs } from "expo-router";

import { TabBarIcon } from "../../components/TabBarIcon";
import { StyleSheet } from "react-native";
import { AddIcon, HomeIcon, MenuIcon, SocialIcon } from "~/src/components/icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarStyle: { ...style.tabBar },
        tabBarItemStyle: { ...style.tabBarItem },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          tabBarIcon: () => <TabBarIcon text="Home" icon={<HomeIcon />} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab One",
          tabBarIcon: () => <TabBarIcon text="Add" icon={<AddIcon />} />,
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            router.push("/modal");
          },
        }}
      />
      <Tabs.Screen
        name="social"
        options={{
          title: "Tab One",
          tabBarIcon: () => <TabBarIcon text="Social" icon={<SocialIcon />} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Tab Two",
          tabBarIcon: () => <TabBarIcon text="Menu" icon={<MenuIcon />} />,
        }}
      />
    </Tabs>
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
