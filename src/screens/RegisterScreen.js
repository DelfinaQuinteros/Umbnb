import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Dimensions, StyleSheet, Text, TextInput, ScrollView, View} from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import { useForm } from '../hook/useForm';
import { stylesApp } from '../theme/AppStyles';
import ButtonGradientRegister from '../components/ButtonGradientRegister';
import {SelectorButton} from '../components/SelectorButton';
import { SvgTop } from '../utils/SvgTop';
import { Fontisto } from "@expo/vector-icons";
import { Switch, TouchableOpacity } from 'react-native-gesture-handler';
import SwitchSelector from 'react-native-switch-selector';

const { width } = Dimensions.get('window')

export default function RegisterScreen( { navigation } ) {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const { name, lastname, age, email, phoneNumber, sex, province, password, onInputChange } = useForm({
      name: '',
      lastname: '',
      age: '',
      email: '',
      phoneNumber: '',
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
      register({ name, lastname, age, email, password, phoneNumber, sex, province })
      navigation.navigate('LoginScreen')
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
          onChangeText={ (value) => onInputChange(value, 'phoneNumber') }
          value={ phoneNumber }
          onSubmitEditing={ onRegister }
        />

        {/* <TextInput 
          style={styles.textInput}
          placeholder="Sexo" 
          onChangeText={ (value) => onInputChange(value, 'sex') }
          value={ sex }
          onSubmitEditing={ onRegister }
          autoCapitalize='none'
        /> */}

        {/* <TouchableOpacity style={styles.containerSex}> */}
            <SwitchSelector
                style={styles.containerSex}
                initial={0}
                onPress={ value => onInputChange(value, 'sex') }
                textColor= "#1F2937"
                selectedColor= "#1F2937"
                buttonColor="#FF3CBD"
                borderColor="#f472b6"
                width={2000}
                hasPadding
                onSubmitEditing={ onRegister }
                options={[
                    { label: "Mujer", value: 0, customIcon: <Fontisto name="female" size={20} /> },
                    { label: "Hombre", value: 1, customIcon: <Fontisto name="male" size={20} /> },
                ]}ID="gender-switch-selector"
                accessibilityLabel="gender-switch-selector"
            />
       {/* </TouchableOpacity>  */}
       {/* <View 
          style={styles.containerSex}
       > */}
        {/* <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={ (toggleSwitch) }
          value={ isEnabled } // TODO: este es el boolean
          style={ styles.switch }
          onSubmitEditing={ onRegister } */}
        {/* /> */}
       {/* </View> */}

        <TextInput 
          style={styles.textInput}
          placeholder="Provincia" 
          onChangeText={ (value) => onInputChange(value, 'province') }
          value={ province }
          onSubmitEditing={ onRegister }
        />


        <ButtonGradientRegister onRegister={ onRegister } />
  
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
  containerSex: {
    alignItems: 'center',
    width: 320,
    marginTop: 20,
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
  switch: {
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
  }
  
});