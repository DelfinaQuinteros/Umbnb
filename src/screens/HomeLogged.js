import React from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import { stylesApp } from '../theme/AppStyles';


export default function HomeLogged( { navigation } ) {

    // console.log(props);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hola Gaston!
      </Text>

    </View>
  )

}

const styles = stylesApp;