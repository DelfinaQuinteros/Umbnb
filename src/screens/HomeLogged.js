import React, { useContext, useEffect } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { stylesApp } from '../theme/AppStyles';


export default function HomeLogged( { navigation } ) {

  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back"
    })
  }, [])

  const { token, user, logout } = useContext(AuthContext)

  const onLogout = () => {

    logout()

    navigation.navigate('LoginScreen')
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {/* Hola {user.name}! */}
        Hola {user}
      </Text>
      {/* <Text style={styles.text}>
        { JSON.stringify(user, null, 3) }
      </Text> */}

      <Button
          title="Logout"
          onPress={ onLogout }
          color="#fff"
      />
    </View>

  )

}

const styles = stylesApp;