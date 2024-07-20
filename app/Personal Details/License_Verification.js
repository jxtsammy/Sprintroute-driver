import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import BankDetails from '../Payment_Details/Bank_Details'

const DriverLicenseVerification = () => {
  const [image, setImage] = useState(null);
  const navigation = useNavigation();
    const handleNextScreen = () => {
            navigation.navigate(BankDetails); 
      };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const captureImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.navText} >←</Text> 
        </TouchableOpacity>
        <Text style={styles.header}>Verify License</Text>
      </View>
      </SafeAreaView>
      <Text style={styles.title}>Lets Verify your driver license</Text>
      <Text style={styles.subtitle}>Upload a legible picture of your driver license to verify it</Text>
      <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.placeholderText}>Tap here to choose an image or Capture image</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={captureImage}>
        <Text style={styles.buttonText}>Capture Image</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextButtonText} onPress={handleNextScreen}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
   nav: {
        flexDirection: 'row',
        marginBottom: 80,
    },
header: {
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'Trebuchet MS',
},
navText: {
    fontSize: 25,
    fontWeight: 600,
    marginRight: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    borderRadius: 10,
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
    marginBottom: 70,
  },
  placeholderText: {
    color: '#aaa',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#FF8000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600'
  },
  nextButton: {
    backgroundColor: '#FF8000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  nextButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600'
  },
});

export default DriverLicenseVerification;
