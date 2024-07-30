import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TextInput, SafeAreaView, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import ProfilePicture from './Profile_Picture'

const ProfileSettings = () => {
  const navigation = useNavigation();
  const [profilePic, setProfilePic] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
    const handleNextScreen = () => {
        navigation.navigate(ProfilePicture); 
      };

  const handleChoosePhoto = () => {
    ImagePicker.launchImageLibrary({ noData: true }, (response) => {
      if (response.assets) {
        setProfilePic(response.assets[0].uri);
      }
    });
  };

  const handleSave = () => {
    // Handle saving the information
    console.log({
      firstName,
      lastName,
      mobileNumber,
      email,
      oldPassword,
      newPassword,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.nav}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={styles.navText} >←</Text> 
                    </TouchableOpacity>
                        <Text style={styles.header}>Profile Settings</Text>
                </View>
      <View style={styles.UserInfo}>
        <TouchableOpacity onPress={handleChoosePhoto}>
        <Image
          source={
            profilePic
              ? { uri: profilePic }
              : require('../../assets/Placeholder.png') // Provide a placeholder image
          }
          style={styles.profilePic}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.userName}>Sallo Samuel</Text>
        <Text style={styles.user}>+233 257256751</Text>
        <Text style={styles.user}>robertflames001@gmail.com</Text>
      </View>
      </View>
      <Text style={styles.inputId}>User Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />

      <Text style={styles.inputId}>Mobile Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="phone-pad"
      />

      <Text style={styles.inputId}>Email Address:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.inputId}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Old Password"
        value={oldPassword}
        onChangeText={setOldPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      <TouchableOpacity style={[styles.button, styles.continue]} onPress={handleSave}>
                        <Text style={styles.buttonText} onPress={handleNextScreen}>Save</Text>
                    </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'left',
    padding: 20,
    backgroundColor: 'white',
  },
  UserInfo:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 30,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 30
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginBottom: 30,
    backgroundColor: '#fff',
  },
  button: {
        display: 'block',
        width: '80%',
        padding: 15,
        borderRadius: 30,
        backgroundColor: 'orange',
        cursor: 'pointer',
        fontSize: 17,
        fontFamily: 'Trebuchet MS',
    },
    continue: {
        backgroundColor: 'orange',
        color: 'black',
        fontWeight: '600',
        marginTop: 60,
        marginHorizontal: 40,
        borderRadius: 30,
    },
    buttonText: {
        color: 'back',
        fontWeight: '600',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Trebuchet MS',
    },
nav: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 150
        
    },
    header: {
        fontSize:25,
        fontWeight:600,
    },
 navText: {
    fontSize: 25,
    fontWeight: 600,
    marginRight: 10,
    
  },
  inputId: {
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'left',
    fontSize: 16,
    fontWeight: '600',
    marginBottom:10,
    marginRight: 200
  },
  userName:{
    fontSize: 35,
    fontFamily: 'Trebuchet MS',
    fontStyle: 'bold',
  }
});

export default ProfileSettings;