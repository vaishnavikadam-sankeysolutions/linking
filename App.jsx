import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import HomeScreen from './src/HomeScreen';
import ProfileScreen from './src/ProfileScreen';
import SettingsScreen from './src/SettingsScreen';
import NotificationsScreen from './src/NotificationsSceen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import linking from './linking';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  );
}

const generateDynamicLink = async () => {
  const link = await dynamicLinks().buildShortLink({
    link: 'https://mfg-ev',
    domainUriPrefix: 'https://mgf-ev.page.link', 
    android: {
      packageName: 'com.linking', 
      fallbackLink: 'https://mfg-ev.com', 
    },
    ios: {
      bundleId: 'com.linking', 
      fallbackLink: 'https://mfg-ev.com', 
    },
  });

  console.log('Generated Dynamic Link:', link);
  return link;
};

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <MyStack />
    </NavigationContainer>
  );
}
