import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../constants";
import TabsComponent from "src/components/atoms/icon/tabsIcon/tabsIcon.component";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";

const TabsLayout = () => {
  // const tabsList = [
  //   { name: "home", icon: icons.home, },
  //   { name: "bookmark", icon: icons.bookmark },
  //   { name: "create", icon: icons.plus },
  //   { name: "profile", icon: icons.profile },
  // ];

  const tabsList = [
    { name: "home", icon: <SimpleLineIcons name="home" /> },
    { name: "search", icon: <AntDesign name="search1" /> },
    { name: "create", icon: <Octicons name="diff-added" /> },
    { name: "albums", icon: <AntDesign name="picture" /> },
    { name: "settings", icon: <SimpleLineIcons name="settings" /> },
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
            height: 45,
          },
        }}
      >
        {tabsList.map((e) => (
          <Tabs.Screen
            name={`screens/${e.name}`}
            key={e.name}
            options={{
              title: e.name,
              headerShown: false,
              tabBarIcon: ({ color, focused }) => e.icon,
            }}
          />
        ))}
      </Tabs>
    </>
  );
};

export default TabsLayout;
