import React from "react";
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function  ButtonGradientLogin ({ onLogin }) {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={ onLogin }
        >
            <LinearGradient
                // Button Linear Gradient
                colors={['#FFB677', '#FF3CBD']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}    
                style={styles.button}
            >
                <Text style={styles.text}>SIGN IN</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 200,
        marginTop: 40,
    },

    text: {
      fontSize: 14,
      color: '#fff',
      fontWeight: 'bold',
    },
    button: {
        width: '80%',
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    
  });