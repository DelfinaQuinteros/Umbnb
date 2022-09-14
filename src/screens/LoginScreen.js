import React, { useContext } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hook/useForm';
import { stylesApp } from '../theme/AppStyles';


export default function LoginScreen( { navigation } ) {

    const { email, password, onInputChange } = useForm({
        email: '',
        password: ''
    })

    // console.log(props);
    const { login } = useContext(AuthContext)

    const onLogin = () => {

        login({ email, password })

        navigation.navigate('HomeLogged')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Login Screen
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email" 
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}

        onChangeText={ (value) => onInputChange(value, 'email') }
        value={ email }
        onSubmitEditing={ onLogin}

       />

      <TextInput 
        style={styles.input} 
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize='none'
        autoCorrect={false}

        onChangeText={ (value) => onInputChange(value, 'password') }
        value={ password }
        onSubmitEditing={ onLogin}

      />

    <TouchableOpacity
        style={styles.button}
        onPress={ onLogin }
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