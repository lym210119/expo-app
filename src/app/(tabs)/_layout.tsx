import React from "react";
import { StyleSheet } from "react-native";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { BlurView } from "expo-blur";

import Colors from "@/constants/Colors";
import SvgIcon from "@/components/SvgIcon";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: { name: string; color: string }) {
  // return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
  return <SvgIcon size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const tabsScreen = [
    { name: "index", title: "首页", icon: "MaterialSymbolsAndroidGoogleHome" },
    { name: "two", title: "客户", icon: "MaterialSymbolsFramePersonRounded" },
    {
      name: "three",
      title: "任务",
      icon: "MaterialSymbolsCalendarTodayOutline",
    },
    { name: "four", title: "我的", icon: "MaterialSymbolsPersonOutline" },
  ];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // tabBarBackground: () => (
        //   <BlurView tint="light" intensity={100} className="absolute left-0 right-0 bottom-0" />
        // ),
      }}
    >
      {tabsScreen.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color }) => (
              <TabBarIcon name={tab.icon} color={color} />
            ),
          }}
        />
      ))}
      {/* <Tabs.Screen
          name="index"
          options={{
            title: "首页",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="MaterialSymbolsAndroidGoogleHome" color={color} />
            ),
            headerRight: () => (
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? "light"].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            title: "客户",
            tabBarIcon: ({ color }) => (
              <TabBarIcon
                name="MaterialSymbolsFramePersonRounded"
                color={color}
              />
            ),
          }}
        /> */}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  blurView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomTabBar: {
    backgroundColor: "transparent",
  },
});
