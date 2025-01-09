
import { StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


const App=() =>{
  const [image, setImage] = useState(null);

  return (
    <View style={styles.container}>
      <Button
        title="Pick an image from the library"
        onPress={pickImage}
      />
      <Button
        title= "Take a photo"
        onPress={() => {}}
      />
    </View>
  );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default App;
  
