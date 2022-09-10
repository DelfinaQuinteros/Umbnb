import React from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { stylesApp } from '../theme/AppStyles';


export default function LoginScreen( { navigation } ) {

    // console.log(props);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Login Screen
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email" 
       />

      <TextInput 
        style={styles.input} 
        placeholder="Password"
      />

    <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HomeLogged')}
    >
        <Text style={styles.textButton}>Login</Text>
    </TouchableOpacity>

    <Button 
        title="Don't have an account? Sign Up"
        onPress={() => navigation.navigate('RegisterScreen')}
        color="#fff"
    />



    </View>
  )

}

const styles = stylesApp;