import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { ProfilesContext } from '../context/ProfilesContext'
import { SvgTop } from '../utils/SvgTop';

const { width } = Dimensions.get('window')

export const App = ( { navigation } ) => {

    const { profile, loadProfile } = useContext(ProfilesContext)

    const { user } = useContext(AuthContext)
    
    useEffect(() => {

        loadProfile(user)

    }, [])

  return (
    <View style={styles.mainContainer}>
        <View style={styles.containerSVG}>
            <SvgTop />
          </View>
          <View style={styles.container}>  
        <Text style={styles.titulo}>
            {profile.name} {profile.lastname}
        </Text>
        <Text style={styles.subTitle}>
            Email: {profile.email}
        </Text>
        <Text style={styles.subTitle}>
            Edad: {profile.age}
        </Text>
        <Text style={styles.subTitle}>
            Provincia: {profile.province}
        </Text>
        <Text style={styles.subTitle}>
            Telfono: {profile.phoneNumber}
        </Text>
        <Text style={styles.subTitle}>
            Sexo: {profile.sex ? 'Masculino' : 'Femenino'}
        </Text>
        <Text style={styles.subTitle}>
            Host: {profile.host ? 'Si' : 'No'}
        </Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#f1f1f1',
      flex: 1,
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerSVG: {
      width: width,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    titulo: {
      fontSize: 80,
      color: '#203545',
      fontWeight: 'bold',
    },
    subTitle: {
      fontSize: 20,
      color: 'gray',
    },
  });