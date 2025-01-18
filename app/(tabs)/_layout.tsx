import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Image } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute', // iOS custom styles for blur effect
            height: 60,
            backgroundColor: 'white',
          },
          default: {
            height: 60, // Footer height for other platforms
          },
        }),
      }}>
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/On.png')} // Custom home icon
              style={{
                width: 28,  // Size for icon
                height: 28,
         
              }}
            />
          ),
          tabBarLabelStyle: {
            color: 'black', // Set title text color to black
          },
        }}
      />

      {/* Wallet Tab */}
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'wallet',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/Group 275.png')} // Custom wallet icon
              style={{
                width: 28,
                height: 28,
                tintColor: color,  // Color change based on active state
              }}
            />
          ),
          tabBarLabelStyle: {
            color: 'black', // Set title text color to black
          },
        }}
      />

      {/* More Tab */}
      <Tabs.Screen
        name="more"
        options={{
          title: 'more',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/images/On-2.png')} // Custom more icon
              style={{
                width: 28,
                height: 28,
                tintColor: color,  // Change icon color based on active state
              }}
            />
          ),
          tabBarLabelStyle: {
            color: 'black', // Set title text color to black
          },
        }}
      />
    </Tabs>
  );
}
