import { StatusBar } from 'expo-status-bar'
import React, { useContext, useEffect } from 'react'
import { Button, Dimensions, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import COLORS from '../components/colors';
import { AuthContext } from '../context/AuthContext'
import { HousesContext } from '../context/HousesContext'
import { Fontisto } from "@expo/vector-icons";
import { ProfilesContext } from '../context/ProfilesContext'

const { width } = Dimensions.get('screen');

export const HousesScreen = ( { navigation } ) => {

    const { houses, loadHouses } = useContext(HousesContext)

    // TODO: pull to refresh

    const { logout, host } = useContext(AuthContext)

    const onLogout = () => {
  
      logout()
  
      navigation.navigate('LoginScreen')
    }

    
      // TODO: este component CARD se puede exportar a una carpeta components
      const Card = ({house}) => {
        return (
          <Pressable
            activeOpacity={0.8}
            onPress={() => navigation.navigate('HouseScreen', house)}>
            <View style={style.card}>
              {/* House image */}
              <Image source={require('../../assets/house1.jpeg')} style={style.cardImage} />
              <View style={{marginTop: 10}}>
                {/* Title and price container */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    {house.name}
                  </Text>
                  <Text
                    style={{fontWeight: 'bold', color: COLORS.blue, fontSize: 16}}>
                    ${house.price}/night
                  </Text>
                </View>
    
                {/* Location text */}
                <Text style={{color: COLORS.grey, fontSize: 14, marginTop: 5}}>
                  Host: {house.owner.name + ' ' + house.owner.lastname} 
                </Text>
                <Text style={{color: COLORS.grey, fontSize: 14, marginTop: 5}}>
                  {house.address}, {house.owner.province}  
                </Text>
    
                {/* Facilities container */}
                <View style={{marginTop: 10, flexDirection: 'row'}}>
                  <View style={style.facility}>
                    <Fontisto name="room" size={18} />
                    <Text style={style.facilityText}>{house.roomsNumber}</Text>
                  </View>
                  <View style={style.facility}>
                    <Fontisto name="male" size={18} />
                    <Text style={style.facilityText}>{house.personsNumber}</Text>
                  </View>
    
                </View>
              </View>
            </View>
          </Pressable>
        );
      };

  return (
    <SafeAreaView style={{backgroundColor: '#EDEDED', flex: 1}}>
    {/* Customise status bar */}
    <StatusBar
      translucent={false}
      backgroundColor={COLORS.white}
      barStyle="dark-content"
    />
    {/* Header container */}
    <View style={style.header}>
      <View style={{
          paddingVertical: 10,
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
      <Button
        title="Logout"
        onPress={ onLogout }
        color="black"
      />
      <Button
        title="Rentas"
        onPress={() => navigation.navigate('Rentals')}
        color="black"
      />
      </View>
      <Pressable
        onPress={() => navigation.navigate('Profile')}
      >
        <Image
            style={style.profileImage}
            source={require('../../assets/person.jpeg')}
        />
      </Pressable>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Input and sort button container */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>

          {
              ( host == true )
              &&
              <Pressable 
                style={style.btnCreateHouse}
                onPress={() => navigation.navigate('CreateHouse')}
              >
                <Text style={style.buttonText}>+ Create a new house to rent</Text>
              </Pressable>
          }

      </View>

      {/* Render Card */}
      <FlatList
        snapToInterval={width - 20}
        contentContainerStyle={{paddingLeft: 20, paddingVertical: 20}}
        data={ houses } // TODO: pasarle el array de houses
        renderItem={ ({item}) => <Card house={item} />}
        // keyExtractor={(h) => h.id}
        // renderItem={ ({item}) => 
        //     <Text style={{fontSize: 20}}>{item.name}</Text>
        // }
        // keyExtractor={(item) => item.id}
      />

        </ScrollView>
    </SafeAreaView>
    )

}


const style = StyleSheet.create({
    header: {
      paddingVertical: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
    profileImage: {
      height: 50,
      width: 50,
      borderRadius: 25,
    },
    btnCreateHouse: {
      height: 50,
      backgroundColor: '#FF385C',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      borderRadius: 12,
    },
    sortBtn: {
      backgroundColor: COLORS.dark,
      height: 50,
      width: 50,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
    },
    optionsCard: {
      height: 210,
      width: width / 2 - 30,
      elevation: 15,
      alignItems: 'center',
      backgroundColor: COLORS.white,
      borderRadius: 20,
      paddingTop: 10,
      paddingHorizontal: 10,
    },
    optionsCardImage: {
      height: 140,
      borderRadius: 10,
      width: '100%',
    },
    optionListsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      paddingHorizontal: 20,
    },
    categoryListText: {
      fontSize: 16,
      fontWeight: 'bold',
      paddingBottom: 5,
      color: COLORS.grey,
    },
    activeCategoryListText: {
      color: COLORS.dark,
      borderBottomWidth: 1,
      paddingBottom: 5,
    },
    categoryListContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 40,
      paddingHorizontal: 40,
    },
    card: {
    //   height: 250,
      backgroundColor: COLORS.white,
      elevation: 10,
      width: width - 40,
      marginRight: 20,
      padding: 15,
      borderRadius: 20,
      marginBottom: 20
    },
    btnCreate: {
      backgroundColor: COLORS.dark,
    },
    cardImage: {
      width: '100%',
      height: 120,
      borderRadius: 15,
    },
    facility: {flexDirection: 'row', marginRight: 15},
    facilityText: {marginLeft: 5, color: COLORS.grey},
  });