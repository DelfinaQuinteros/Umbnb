import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { Alert, Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hook/useForm';
import ButtonGradientLogin from '../components/ButtonGradientLogin';
import { SvgTop } from '../utils/SvgTop';

const { width } = Dimensions.get('window')

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
    <View style={styles.mainContainer}>
          <View style={styles.containerSVG}>
            <SvgTop />
          </View>
          <View style={styles.container}>
            <Text style={styles.titulo}>Welcome</Text>
            <Text style={styles.subTitle}>Sign In to your account</Text>
          

            <TextInput 
              style={styles.textInput}
              placeholder="Email" 
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={ (value) => onInputChange(value, 'email') }
              value={ email }
              onSubmitEditing={ onLogin}
            />
            <TextInput 
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={ (value) => onInputChange(value, 'password') }
              value={ password }
              onSubmitEditing={ onLogin}
            />

            {/* <Text style={styles.forgotPassword}>Forgot your password?</Text> */}

            <ButtonGradientLogin onLogin={onLogin}/>

            <Button 
                title="Don't have an account? Sign Up"
                onPress={() => navigation.navigate('RegisterScreen')}
                color="gray"
            />
            {/* <Text style={styles.forgotPassword}>Don't have an account?</Text> */}

            <StatusBar style="auto" />
          </View>
        </View>
  )
}

// const styles = stylesApp;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSVG: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 80,
    color: '#203545',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
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
    fontSize: 14,
    color: 'gray',
    marginTop: 20
  },
});