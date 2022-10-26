import React, { useContext, useState } from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, Pressable} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ButtonGradientHouse from '../components/ButtonGradientHouse';
import umbnbApi from '../api/umbnbApi';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hook/useForm';
import { HousesContext } from '../context/HousesContext';


const {width} = Dimensions.get('screen');

export const CreateHouse = ({ navigation }) => {

    const { addHouse } = useContext(HousesContext)

    const [persons, setPersons] = useState(0);
    const [rooms, setRooms] = useState(0);

    const { address, city, name, personsNumber, price, province, review, roomsNumber, onInputChange } = useForm({
        address: '',
        city: '',
        name: '',
        personsNumber: 0,
        price: 0,
        province: '',
        review: 0,
        roomsNumber: 0,
    })

    const { user } = useContext(AuthContext)

  function SvgTop() {
    return (
      <Svg
      width={500}
      height={324}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M297.871 315.826c73.405 13.896 165.338-13.964 202.129-29.63V230H1.326v63.5c69.15-42.913 204.789 4.957 296.545 22.326z"
        fill="url(#prefix__paint0_linear_103:6)"
        fillOpacity={0.5}
      />
      <Path
        d="M237.716 308.627C110.226 338.066 30.987 318.618 0 304.77V0h500v304.77c-43.161-12.266-134.794-25.581-262.284 3.857z"
        fill="url(#prefix__paint1_linear_103:6)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_103:6"
          x1={492.715}
          y1={231.205}
          x2={480.057}
          y2={364.215}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFB677" />
          <Stop offset={1} stopColor="#FF3CBD" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear_103:6"
          x1={7.304}
          y1={4.155}
          x2={144.016}
          y2={422.041}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFB677" />
          <Stop offset={1} stopColor="#FF3CBD" />
        </LinearGradient>
      </Defs>
    </Svg>
    )
  }
  return (
    <View style={styles.mainContainer}>
       <View style={styles.containerSVG}>
        <SvgTop/>
       </View>
       <View style={styles.container}>
        <Text style={styles.titulo}>Create a new house</Text>
        <TextInput
          placeholder="Name"
          style={styles.textInput}
          onChangeText={ (value) => onInputChange(value, 'name') }
          value={ name }
        //   onSubmitEditing={ onCreateHouse }
        />
        <TextInput
          placeholder="Address"
          style={styles.textInput}
          onChangeText={ (value) => onInputChange(value, 'address') }
          value={ address }
        //   onSubmitEditing={ onCreateHouse }
        />
        <TextInput
          placeholder="Review"
          keyboardType='numeric'
          style={styles.textInput}
          onChangeText={ (value) => onInputChange(value, 'review') }
          value={ review }
        //   onSubmitEditing={ onCreateHouse }
        />
        <TextInput
          placeholder="Price"
          keyboardType='number-pad'
          style={styles.textInput}
          onChangeText={ (value) => onInputChange(value, 'price') }
          value={ price }
        //   onSubmitEditing={ onCreateHouse }
        />
        {/* TODO: podemos colocar un selector */}
        <TextInput
            placeholder="Province"
            style={styles.textInput}
            onChangeText={ (value) => onInputChange(value, 'province') }
            value={ province }
            // onSubmitEditing={ onCreateHouse }
        />
        <TextInput
          placeholder="City"
          style={styles.textInput}
          onChangeText={ (value) => onInputChange(value, 'city') }
          value={ city }
        //   onSubmitEditing={ onCreateHouse }
        />

        <Text style={styles.subTitle}>Persons</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
              onPress={() => setPersons(Math.max(0, persons - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
          </Pressable>
            <Text 
            style={{marginHorizontal: 20, fontSize: 16}}
            onChangeText={ (value) => onInputChange(value, 'personsNumber') }
            value={ personsNumber }
            // onSubmitEditing={ onCreateHouse }
            >
                {persons}
            </Text>
          <Pressable
              onPress={() => setPersons(persons + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
          </Pressable>
        </View>

        <Text style={styles.subTitle}>Rooms</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
              onPress={() => setRooms(Math.max(0, rooms - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
          </Pressable>
            <Text 
                style={{marginHorizontal: 20, fontSize: 16}}
                onChangeText={ (value) => onInputChange(value, 'roomsNumber') }
                value={ roomsNumber }
                // onSubmitEditing={ onCreateHouse }
            >
                {rooms}
            </Text>
          <Pressable
              onPress={() => setRooms(rooms + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
        {/* <ButtonGradientHouse
            fun={ addHouse({
                address,
                city,
                name,
                owner: {
                    id: user
                },
                personsNumber: persons,
                price: parseInt(price),
                province,
                review: parseInt(review),
                roomsNumber: rooms,
            })}
        /> */}
        {/* // TODO: agregue el pressable por el gradient tenia problemas */}
        <Pressable 
            style={styles.btnCreate}
            onPress={ () => addHouse({
                address,
                city,
                name,
                owner: {
                    id: user
                },
                personsNumber: persons,
                price: parseInt(price),
                province,
                review: parseInt(review),
                roomsNumber: rooms,
            }, navigation)
            }
        >
            <Text style={styles.buttonText}>Create</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({

  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  btnCreate: {
    backgroundColor: '#FF385C',
    borderRadius: 10,
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 20,
  },
    buttonText: {
    color: '#fff',
    fontSize: 30,
    },
  container: {
    top: -230,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSVG: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 38,
    color: '#203545',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 22,
    color: 'gray',
    marginTop: 20,
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    fontSize: 16,
    color: 'gray',
    marginTop: 20
  },

  button: {
    borderWidth: 1,
    width: 40,
    height: 40,
    borderRadius: 15,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  }

});

// export default App;