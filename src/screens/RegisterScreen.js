import React, { useEffect } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { stylesApp } from '../theme/AppStyles';

export default function RegisterScreen( { navigation } ) {

    useEffect(() => {
      navigation.setOptions({
        headerBackTitle: "Back"
      })
    }, [])
    

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Register Screen
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre" 
       />

      <TextInput
        style={styles.input}
        placeholder="Apellido" 
       />

      <TextInput
        style={styles.input}
        placeholder="Edad" 
       />

      <TextInput
        style={styles.input}
        placeholder="Email" 
       />

      <TextInput
        style={styles.input}
        placeholder="Numero de telefono" 
      />

      <TextInput
        style={styles.input}
        placeholder="Sexo" 
       />

      <TextInput
        style={styles.input}
        placeholder="Provincia" 
       />

      <TextInput 
        style={styles.input} 
        placeholder="Password"
      />

    <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginScreen')}
    >
        <Text style={styles.textButton}>Register</Text>
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