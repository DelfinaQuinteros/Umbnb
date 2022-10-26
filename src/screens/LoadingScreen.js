import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { stylesApp } from '../theme/AppStyles'

export const LoadingScreen = () => {
  return (
    <View style={stylesApp.container}>
        <ActivityIndicator 
            size={50}
            color="white"

        />
    </View>
  )
}
