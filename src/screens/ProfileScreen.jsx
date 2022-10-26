import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { AuthContext } from '../context/AuthContext'
import { ProfilesContext } from '../context/ProfilesContext'
import { SvgTop } from '../utils/SvgTop';
import { Avatar } from "@rneui/themed";
// import ButtonGradient from './src/consts/ButtonGradient' // Este es el boton de ver mis casas, hay que crearlo si queres o reciclamos otro, pero tiene diferenttes estilos

const { width } = Dimensions.get('window')

export const ProfileScreen = ( { navigation } ) => {

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
              <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 30,
        }}
      >
        <Avatar
          size={170}
          rounded
          title={profile.name[0] + profile.lastname[0]}
          containerStyle={{ backgroundColor: '#203545', marginTop: -215 }}
        /></View>
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
            <View style={styles.bookNowBtn}>
                <Pressable
                    style={styles.btnRent}
                    onPress={() => navigation.navigate('HostHouses')}
                >
                    <Text style={styles.buttonText}>Ver mis casas</Text>
                </Pressable>
            </View>
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
      fontSize: 45,
      color: '#203545',
      fontWeight: 'bold',
    },
    subTitle: {
      fontSize: 26,
      color: 'gray',
    },
    btnRent: {
        backgroundColor: '#FF385C',
        height: 60,
        width: 150, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 10,
      },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
    bookNowBtn: {
        height: 260,
        width: 250, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 20,
        },
  })