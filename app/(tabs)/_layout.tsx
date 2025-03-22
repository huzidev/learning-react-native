import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index"
        options={{
          title: 'index',
          headerShown: false,
          tabBarIcon: ({ focused }) => (

          )
        }}
      />
    </Tabs>
  )
}