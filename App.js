import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from './assets/logo.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';


export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);


  let openImagePicker = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if(permissionResult.granted === false){
      alert('permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if(pickerResult.cancelled === true){
      return;
    }
    
    setSelectedImage({ localUri: pickerResult.uri});



  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())){
      alert('uh oh sharing isnt availibe on your platfrom');
      return;
    }
    await Sharing.shareAsync(selectedImage.localUri);
  }

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonStyle}>Share this photo!</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instructions}>To share a photo from your phone wqith a friend press the button beloew!</Text>


      <TouchableOpacity
      onPress={openImagePicker}
      style={styles.button}>
        <Text style={styles.buttonStyle}> Pick a photo! </Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 350,
    height: 150,
    marginBottom: 10,
    borderRadius: 50
  },
  instructions: {
    color: "blue",
    fontSize: 18,
    marginHorizontal: 15,
  },
  buttonStyle: {
    fontSize: 20,
    color: '#fff',

  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});
