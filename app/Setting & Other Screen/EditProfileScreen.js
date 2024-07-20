// EditProfileScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native'

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const handleNextScreen = () => {
    navigation.navigate(EarnMoney); 
  };
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const selectImage = () => {
    ImagePicker.launchImageLibrary({}, (response) => {
      if (response.assets && response.assets.length > 0) {
        setProfilePicture(response.assets[0].uri);
      }
    });
  };

  const captureImage = () => {
    ImagePicker.launchCamera({}, (response) => {
      if (response.assets && response.assets.length > 0) {
        setProfilePicture(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>
      </SafeAreaView>
        <View style={styles.profilePictureContainer}>
        <Image source={require('../../assets/Placeholder.png')} style={styles.profilePicture} />
        <TouchableOpacity style={styles.cameraButton} onPress={selectImage}>
          <Text style={styles.cameraIcon} onPress={captureImage}>📷</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Full Name"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="User ID"
          placeholderTextColor="#999"
          editable={false}
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Phone Number"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
        />
      </View>
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  backButton: {
    fontSize: 24,
    color: '#000',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#CCC',
  },
  cameraButton: {
    position: 'relative',
    bottom: 5,
    top: -40,
    left: 40,
    backgroundColor: 'orange',
    borderRadius: 20,
    padding: 10,
  },
  cameraIcon: {
    color: '#FFF',
    fontSize: 16,
  },
  inputContainer: {
    margin: 20,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
    fontSize: 16,
  },
  updateButton: {
    backgroundColor: 'orange',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 50,
    alignSelf: 'center',
    marginTop: 20,
  },
  updateButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
