import React from 'react'
import { useState } from 'react';
import { View, Image, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native'

const ImageUpload = () => {
  const navigation = useNavigation();
  const handleNextScreen = () => {
    navigation.navigate('Vehicle_Info');
};
  const [profileImage, setProfileImage] = useState(null);


  const takePhoto = () => {
    launchCamera({}, (response) => {
      if (response.assets && response.assets.length > 0) {
        setProfileImage(response.assets[0].uri);
      }
    });
  };

  return (

    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.navText} >←</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Add Picture</Text>
      </View>
        <Text>Please take a picture yourself. Its hould include your fuul face and front view with eyes opened</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={selectImage}>
          <Image
            source={profileImage ? { uri: profileImage } : require('../../assets/Placeholder.png')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.button, styles.continue]}>
        <Text onPress={takePhoto}style={styles.buttonText}>Add Image</Text>
      </TouchableOpacity>
      <Text  style={styles.altText} onPress={handleNextScreen}>Continue</Text>
    </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  nav: {
        flexDirection: 'row',
        marginBottom: 150,
        marginRight: 200
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
  imageContainer: {
    marginBottom: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
        display: 'block',
        padding: 15,
        borderRadius: 30,
        cursor: 'pointer'
    },
    continue: {
        alignContent:'center',
        justifyContent: 'center',
        width: '70%',
        backgroundColor: 'orange',
        fontWeight: '600',
        marginTop: 50,
        marginHorizontal: 40,
        borderRadius: 30,
        height: 50,
        marginBottom: 20,
    },
    buttonText: {
        color: 'black',
        fontWeight: '600',
        fontSize: 20,
        textAlign: 'center',
    },
    altText: {
        color: 'orange',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 250,
    },
    safeArea: {
    flex: 1,
    backgroundColor: '#fff', // or any other background color you prefer
  },
});

export default ImageUpload;
