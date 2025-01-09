
import { StyleSheet,Button,Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';


const App=() =>{
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);

  const pickImage = async () => {
    let permissions = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissions?.granted) {
       let result = await ImagePicker.launchImageLibraryAsync();

      if (!result.canceled) setImage(result.assets[0]);
      else setImage(null)
    }
  }

  const takePhoto = async () => {
    let permissions = await ImagePicker.requestCameraPermissionsAsync();

    if (permissions?.granted) {
      let result = await ImagePicker.launchCameraAsync();

      if (!result.canceled) setImage(result.assets[0]);
      else setImage(null)
    }
  }

  const getLocation = async () => {
    let permissions = await Location.requestForegroundPermissionsAsync();

    if (permissions?.granted) {
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } else {
      Alert.alert("Permissions to read location aren't granted");
    }
  }
  
  return (
    <View style={styles.container}>
      <Button
        title="Pick an image from the library"
        onPress={pickImage}
      />
      <Button
        title= "Take a photo"
        onPress={takePhoto}
      />
      <Button
        title="Get my location"
        onPress={getLocation}
      />
      {image &&
        <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />
      }
    </View>

  );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  }
});

export default App;
  
