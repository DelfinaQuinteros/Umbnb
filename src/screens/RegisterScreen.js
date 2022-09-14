import React, { useEffect } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { useForm } from '../hook/useForm';
import { stylesApp } from '../theme/AppStyles';

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

    const onRegister = () => {

    }
    

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Register Screen
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre" 
        onChangeText={ (value) => onInputChange(value, 'name') }
        value={ name }
        onSubmitEditing={ onRegister }
       />

      <TextInput
        style={styles.input}
        placeholder="Apellido" 
        onChangeText={ (value) => onInputChange(value, 'lastname') }
        value={ lastname }
        onSubmitEditing={ onRegister }
       />

      <TextInput
        style={styles.input}
        placeholder="Edad" 
        onChangeText={ (value) => onInputChange(value, 'age') }
        value={ age }
        onSubmitEditing={ onRegister }
       />

      <TextInput
        style={styles.input}
        placeholder="Email" 
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}

        onChangeText={ (value) => onInputChange(value, 'email') }
        value={ email }
        onSubmitEditing={ onRegister }
       />

      <TextInput
        style={styles.input}
        placeholder="Numero de telefono" 
        onChangeText={ (value) => onInputChange(value, 'phone') }
        value={ phone }
        onSubmitEditing={ onRegister }
      />

      <TextInput
        style={styles.input}
        placeholder="Sexo" 
        onChangeText={ (value) => onInputChange(value, 'sex') }
        value={ sex }
        onSubmitEditing={ onRegister }
       />

      <TextInput
        style={styles.input}
        placeholder="Provincia" 
        onChangeText={ (value) => onInputChange(value, 'province') }
        value={ province }
        onSubmitEditing={ onRegister }
       />

      <TextInput 
        style={styles.input} 
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={ (value) => onInputChange(value, 'password') }
        value={ password }
        onSubmitEditing={ onRegister }
      />

    <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginScreen')}
    >
        <Text style={styles.textButton}>Crear cuenta</Text>
    </TouchableOpacity>

    <Button 
        title="Login instead"
        onPress={() => navigation.navigate('LoginScreen')}
        color="#fff"
      />

    </View>
  )

}

const styles = stylesApp;