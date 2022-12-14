import { StatusBar } from 'expo-status-bar'
import React, { useContext, useEffect } from 'react'
import { Button, Dimensions, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import COLORS from '../components/colors';
import { Fontisto } from "@expo/vector-icons";
import { RentalsContext } from '../context/RentalsContext'
import { ProfilesContext } from '../context/ProfilesContext'
import { AuthContext } from '../context/AuthContext'

const { width } = Dimensions.get('screen');

export const RentalsScreen = ( { navigation } ) => {

    const { rentals, deleteRental } = useContext(RentalsContext)
    
    // const houses = rentals.map((rental) => {
    //   return rental.house
    // })
    
    const { profile, loadProfile } = useContext(ProfilesContext)

    const { user } = useContext(AuthContext)

    useEffect(() => {
        loadProfile(user)
    }, [user])
    

      // TODO: este component CARD se puede exportar a una carpeta components
      const Card = ({rental}) => {
        // console.log(item, 'House from Card')
        return (
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
                    {rental.house.name}
                  </Text>
                  <Text
                    style={{fontWeight: 'bold', color: COLORS.blue, fontSize: 16}}>
                    ${rental.house.price}/night
                  </Text>
                </View>
    
                {/* Location text */}
                <Text style={{color: COLORS.grey, fontSize: 14, marginTop: 5}}>
                  Host: {rental.house.owner.name + ' ' + rental.house.owner.lastname} 
                </Text>
                <Text style={{color: COLORS.grey, fontSize: 14, marginTop: 5}}>
                  {rental.house.address}, {rental.house.owner.province}  
                </Text>
    
                {/* Facilities container */}
                <View style={{marginTop: 10, flexDirection: 'row'}}>
                  <View style={style.facility}>
                    <Fontisto name="room" size={18} />
                    <Text style={style.facilityText}>{rental.house.roomsNumber}</Text>
                  </View>
                  <View style={style.facility}>
                    <Fontisto name="male" size={18} />
                    <Text style={style.facilityText}>{rental.house.personsNumber}</Text>
                  </View>
                  <Pressable 
                    style={style.btnCancel}
                    onPress={ () => deleteRental(rental.id) }
                  >
                    <Text>Cancel rental</Text>
                  </Pressable>
    
                </View>
              </View>
            </View>
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
      <Pressable
        onPress={() => navigation.navigate('Profile')}
      >
        <Image
            style={style.profileImage}
            source={require('../../assets/person.jpeg')}
        />
      </Pressable>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>
        {profile.name + ' ' + profile.lastname}
      </Text>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Render Card */}
      <Text style={{fontSize: 20, fontWeight: 'bold', marginHorizontal: 20}}>
        My Rentals (total: {rentals.length})
      </Text>
      <FlatList
        snapToInterval={width - 20}
        contentContainerStyle={{paddingLeft: 20, paddingVertical: 20}}
        data={ rentals } // TODO: pasarle el array de houses
        renderItem={ ({item}) => <Card rental={item} />}
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
    btnCancel: {
      backgroundColor: '#e1e1e1',
      padding: 10,
      borderRadius: 10,
      marginLeft: 130,
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