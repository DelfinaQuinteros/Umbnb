import { Image, StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import logo from './assets/logo.png'; 
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'; 
import { useState } from 'react';
import * as ImageManipulator from "expo-image-manipulator";

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  let openShareDialogAsync = async () => {    
    if (Platform.OS === 'web') {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    const imageTmp = await ImageManipulator.manipulateAsync(selectedImage.localUri);
    await Sharing.shareAsync(imageTmp.uri);
  }; 

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
       <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Para compartir la foto apreta el boton</Text>

      <Image source={logo} style={styles.image} /> 

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF385C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    color: '#fff',
    margin: 14,
    marginBottom: 20
  },
  image: {
    width: 305, 
    height: 159
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  button: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    margin: 20
  }
  
});