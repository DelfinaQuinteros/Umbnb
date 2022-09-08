import React from "react";
import SwitchSelector from "react-native-switch-selector";
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function  SelectorButton () {
    return (
        <TouchableOpacity style={styles.container}>
            <SwitchSelector
                initial={0}
                onPress={value => this.setState({ gender: value })}
                textColor= "#1F2937"
                selectedColor= "#1F2937"
                buttonColor="#FF3CBD"
                borderColor="#f472b6"
                width={2000}
                hasPadding
                options={[
                    { label: "Femenino", value: "f"}, 
                    { label: "Masculino", value: "m" } 
                ]}
                testID="gender-switch-selector"
                accessibilityLabel="gender-switch-selector"
            />
       </TouchableOpacity> 
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 320,
        marginTop: 20,
    },
});