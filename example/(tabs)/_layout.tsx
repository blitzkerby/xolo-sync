import React from 'react';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure you import the correct icon set

// components
import { HapticTab } from '@/components/common/HapticTab';
import TabBarBackground from '@/components/common/TabBarBackground';

// constants
import { Colors } from '@/constants/Colors';

// hooks
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Icon size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <Icon size={28} name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <Icon size={28} name="paper-plane" color={color} />,
        }}
      />
      <Tabs.Screen 
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <Icon size={28} name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
