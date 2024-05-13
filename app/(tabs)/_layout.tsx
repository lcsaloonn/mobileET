import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../constants";
import TabsComponent from "components/icon/tabsIcon/tabsIcon.component";

const TabsLayout = () => {
  const tabsList = [
    { name: "home", icon: icons.home },
    { name: "bookmark", icon: icons.bookmark },
    { name: "create", icon: icons.plus },
    { name: "profile", icon: icons.profile },
  ];

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
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
              tabBarIcon: ({ color, focused }) => (
                <TabsComponent
                  icon={e.icon}
                  color={color}
                  name={e.name}
                  focus={focused}
                />
              ),
            }}
          />
        ))}
      </Tabs>
    </>
  );
};

export default TabsLayout;
