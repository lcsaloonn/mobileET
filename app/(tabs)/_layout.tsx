import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import HeaderComponent from "src/components/molecules/header/header.component";

const TabsLayout = () => {
  const tabsList = [
    {
      name: "home",
      icon: <SimpleLineIcons name="home" style={styles.icons} />,
    },
    { name: "search", icon: <AntDesign name="search1" style={styles.icons} /> },
    {
      name: "create",
      icon: <Octicons name="diff-added" style={styles.icons} />,
    },
    { name: "albums", icon: <AntDesign name="picture" style={styles.icons} /> },
    {
      name: "settings",
      icon: <SimpleLineIcons name="settings" style={styles.icons} />,
    },
  ];

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            backgroundColor: "white",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 50,
          },
        }}
      >
        {tabsList.map((e) => (
          <Tabs.Screen
            name={`screens/${e.name}`}
            key={e.name}
            options={{
              title: e.name,
              // headerShown: true,
              // header: () => <HeaderComponent />,
              // headerStyle: {
              //   height: 10,
              // },
              headerShown: false,
              tabBarIcon: ({ color, focused }) => e.icon,
            }}
          />
        ))}
      </Tabs>
    </>
  );
};
const styles = StyleSheet.create({
  icons: {
    fontSize: 20,
  },
});

export default TabsLayout;
