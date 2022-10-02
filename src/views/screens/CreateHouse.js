
import React, { useState } from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, Pressable} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ButtonGradientHouse from '../../consts/ButtonGradientHouse';


const {width} = Dimensions.get('screen');

const App = () => {
  const [persons, setPersons] = useState(0);
  const [rooms, setRooms] = useState(0);


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
        />
        <TextInput
          placeholder="Address"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Review"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Price"
          style={styles.textInput}
        />
        <TextInput
            placeholder="Province"
            style={styles.textInput}
        />
        <TextInput
          placeholder="City"
          style={styles.textInput}
        />

        <Text style={styles.subTitle}>Persons</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
              onPress={() => setPersons(Math.max(0, persons - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
          </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{persons}</Text>
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
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{rooms}</Text>
          <Pressable
              onPress={() => setRooms(rooms + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
        <ButtonGradientHouse/>
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
  container: {
    top: -270,
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
    fontSize: 15,
    color: 'gray',
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
    width: 30,
    height: 30,
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

export default App;