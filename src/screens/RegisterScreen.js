import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Dimensions, StyleSheet, Text, TextInput, ScrollView, View} from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import { useForm } from '../hook/useForm';
import { stylesApp } from '../theme/AppStyles';
import ButtonGradientRegister from '../components/ButtonGradientRegister';
import {SelectorButton} from '../components/SelectorButton';
import { SvgTop } from '../utils/SvgTop';

const { width } = Dimensions.get('window')

export default function RegisterScreen( { navigation } ) {

    const { name, lastname, age, email, phone, sex, province, password, onInputChange } = useForm({
      name: '',
      lastname: '',
      age: '',
      email: '',
      phone: '',
      sex: '',
      province: '',
      password: ''
    })



    useEffect(() => {
      navigation.setOptions({
        headerBackTitle: "Back"
      })
    }, [])

    const {register} = useContext(AuthContext)
    const onRegister = () => {

      register({ name, lastname, age, email, password, phone, sex, province })
      navigation.navigate('HomeLogged')
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        <View style={styles.containerSVG}>
          <SvgTop/>
        </View>
        <View style={styles.container}>
          <Text style={styles.titulo}>Create a new account</Text>


        <TextInput 
          style={styles.textInput}
          placeholder="Nombre" 
          onChangeText={ (value) => onInputChange(value, 'name') }
          value={ name }
          onSubmitEditing={ onRegister }
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Apellido" 
          onChangeText={ (value) => onInputChange(value, 'lastname') }
          value={ lastname }
          onSubmitEditing={ onRegister }
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Edad" 
          onChangeText={ (value) => onInputChange(value, 'age') }
          value={ age }
          onSubmitEditing={ onRegister }
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Email" 
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={ (value) => onInputChange(value, 'email') }
          value={ email }
          onSubmitEditing={ onRegister }
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={ (value) => onInputChange(value, 'password') }
          value={ password }
          onSubmitEditing={ onRegister }
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Numero de telefono" 
          onChangeText={ (value) => onInputChange(value, 'phone') }
          value={ phone }
          onSubmitEditing={ onRegister }
        />

        <TextInput 
          style={styles.textInput}
          placeholder="Sexo" 
          onChangeText={ (value) => onInputChange(value, 'sex') }
          value={ sex }
          onSubmitEditing={ onRegister }
        />

        <TextInput 
          style={styles.textInput}
          placeholder="Provincia" 
          onChangeText={ (value) => onInputChange(value, 'province') }
          value={ province }
          onSubmitEditing={ onRegister }
        />


        <ButtonGradientRegister onRegister={onRegister} />
  
        {/* <Text style={styles.forgotPassword}>Have an account? Sign in</Text> */}
        <Button 
            title="Do you have an account? Sign In"
            onPress={() => navigation.navigate('LoginScreen')}
            color="#203545"
        />  

        <StatusBar style="auto" />
      </View>
      </View>
    </ScrollView> 
  )

}

// const styles = stylesApp;
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