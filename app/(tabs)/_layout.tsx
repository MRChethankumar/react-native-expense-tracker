import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs screenOptions={{headerShown:false}}>
      <Tabs.Screen name='index' options={{
        title:"Recent"
      }}/>
      <Tabs.Screen name='all' options={{
        title:"All"
      }}
      />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})