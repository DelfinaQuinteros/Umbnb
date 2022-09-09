import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import ButtonGradientRegister from '../../consts/ButtonGradientRegister';
import { SelectorButton } from '../../consts/SelectorButton';

const { width } = Dimensions.get('window')

export default function App() {

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
        <Text style={styles.titulo}>Create a new account</Text>
        <TextInput 
          placeholder="Name"
          style={styles.textInput}
        />
        <TextInput 
          placeholder="Lastname"
          style={styles.textInput}
        />
        <TextInput 
          placeholder="Age"
          style={styles.textInput}
        />
        <TextInput 
          placeholder="Example@email.com"
          style={styles.textInput}
        />
        <TextInput 
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry={true}
        />
        <TextInput 
          placeholder="Phone Number"
          style={styles.textInput}
        />
        <SelectorButton/>
        <TextInput 
          placeholder="Province"
          style={styles.textInput}
        />
        <ButtonGradientRegister/>
        <Text style={styles.forgotPassword}>Have an account? Sign in</Text>
        <StatusBar style="auto" />
      </View>
    </View>
      
  );
}

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
  
});