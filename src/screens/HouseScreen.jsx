import React, { useContext } from 'react';
import {  ImageBackground, SafeAreaView, View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView, Alert} from 'react-native';
import { Fontisto } from "@expo/vector-icons";
import COLORS from '../components/colors';
import ButtonGradientRent from '../components/ButtonGradientRent';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { RentalsContext } from '../context/RentalsContext';
import { AuthContext } from '../context/AuthContext';

const {width} = Dimensions.get('screen');

export const HouseScreen = ( { navigation, route } ) => {
  const house = route.params;

  const { addRental } = useContext(RentalsContext)
  const { user } = useContext(AuthContext)

  const InteriorCard = ({interior}) => {
    return <Image source={interior} style={style.interiorImage} />;
  };

  const onRentHouse = () => {
    Alert.alert('House rented!')
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* House image */}

        <View style={style.backgroundImageContainer}>
          <ImageBackground style={style.backgroundImage} source={require('../../assets/house1.jpeg')}>
            <View style={style.header}>
              <View style={style.headerBtn}>
                <Fontisto
                  name="angle-dobule-left"
                  size={20}
                  onPress={navigation.goBack}
                />
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={style.detailsContainer}>
          {/* Name and rating view container */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 40, fontWeight: 'bold'}}>
              {house.name}
            </Text>
            <View style={style.ratingTag}>
              <Text style={{color: COLORS.white}}>{house.review}.0</Text>
            </View>
          </View>

          {/* Location text */}
          <Text style={{color: COLORS.grey, fontSize: 22, marginTop: 5}}>
              Host: {house.owner.name} {house.owner.lastname}
            </Text>
          <Text style={{fontSize: 22, color: COLORS.grey}}>
            {house.address}, {house.owner.province}  
          </Text>

          {/* Facilities container */}
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <View style={style.facility}>
              <Fontisto name="room" size={22} />
              <Text style={style.facilityText}>{house.roomsNumber}</Text>
            </View>
            <View style={style.facility}>
              <Fontisto name="male" size={22} />
              <Text style={style.facilityText}>{house.personsNumber}</Text>
            </View>
          </View>

          <FlatList
            contentContainerStyle={{marginTop: 40}}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, key) => key.toString()}
            data={[
                require('../../assets/interior1.jpeg'),
                require('../../assets/interior2.jpeg'),
                require('../../assets/interior3.jpeg'),
            ]}
            renderItem={({item}) => <InteriorCard interior={item} />}
          />

          {/* footer container */}
          <View style={{flexDirection: 'row', marginTop: 15}}></View>
          <View style={style.footer}>
            <View>
              <Text
                style={{color: COLORS.blue, fontWeight: 'bold', fontSize: 22}}>
                ${house.price}/night
              </Text>
              <Text
                style={{fontSize: 18, color: COLORS.grey, fontWeight: 'bold'}}>
                Total Price
              </Text>
            </View>
            <View style={style.bookNowBtn}>
                <Pressable
                    style={style.btnRent}
                    onPress={ () => addRental({
                        client: {
                            id: user
                        },
                        host: {
                            id: house.owner.id
                        },
                        house: {
                            id: house.id
                        },
                        date: new Date(),
                        price: house.price
                    }, house) 
                    }
                >
                    <Text style={style.buttonText}>Rent now</Text>
                </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  backgroundImageContainer: {
    elevation: 20,
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
    height: 320,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
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
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingTag: {
    height: 30,
    width: 35,
    backgroundColor: '#FF3CBD',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  virtualTag: {
    top: -20,
    width: 120,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  interiorImage: {
    width: width / 3 - 20,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  footer: {
    height: 90,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  bookNowBtn: {
    height: 260,
    width: 250, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  detailsContainer: {flex: 1, paddingHorizontal: 20, marginTop: 40},
  facility: {flexDirection: 'row', marginRight: 15},
  facilityText: {marginLeft: 5, color: COLORS.grey, fontSize:18},
});

// export default DetailsScreen;