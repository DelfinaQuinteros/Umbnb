import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { ProfilesContext } from '../context/ProfilesContext'

export const ProfileScreen = ( { navigation } ) => {

    const { profile, loadProfile } = useContext(ProfilesContext)

    const { user } = useContext(AuthContext)
    
    useEffect(() => {

        loadProfile(user)

    }, [])

  return (
    <View
        style={style.container}
    >
        <Text style={{fontSize: 40, fontWeight: 'bold'}}>
            {profile.name} {profile.lastname}
        </Text>
        <Text >
            Email: {profile.email}
        </Text>
        <Text >
            Edad: {profile.age}
        </Text>
        <Text >
            Provincia: {profile.province}
        </Text>
        <Text >
            Telfono: {profile.phoneNumber}
        </Text>
        <Text>
            Sexo: {profile.sex ? 'Masculino' : 'Femenino'}
        </Text>
        <Text>
            Host: {profile.host ? 'Si' : 'No'}
        </Text>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
