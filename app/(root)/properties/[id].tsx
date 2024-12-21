import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const property = () => {
    const {id}=useLocalSearchParams();
  return (
    <View>
      <Text>Property {id}</Text>
    </View>
  )
}

export default property