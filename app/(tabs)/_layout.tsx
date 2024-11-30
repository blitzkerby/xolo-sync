import React from 'react';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HapticTab } from '@/components/common/HapticTab';
import TabBarBackground from '@/components/common/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        tabBarShowLabel: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: () => <Icon size={28} name="home" />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: () => <Icon size={28} name="search" />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: () => <Icon size={28} name="paper-plane" />,
        }}
      />
      <Tabs.Screen 
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: () => <Icon size={28} name="person" />,
        }}
      />
    </Tabs>
  );
}