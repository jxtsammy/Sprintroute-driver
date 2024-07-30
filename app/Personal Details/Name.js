import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';


const Name = () => {
    const navigation = useNavigation();
    const handleAddProfile = () => {
            navigation.navigate('Profile_Picture');
      };
    return (
           <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <View style={styles.nav}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={styles.navText} >←</Text>
                    </TouchableOpacity>
                        <Text style={styles.header}>Enter Name</Text>
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
//                     <View style={styles.inputGroup}>
//                         <TextInput  style={styles.fname} placeholder="First Name"  placeholderTextColor="#555555"/>
//                         <TextInput style={styles.lname} placeholder="Last Name" placeholderTextColor="#555555"/>
//                     </View>
//                     <TouchableOpacity style={[styles.button, styles.continue]} onPress={handleAddProfile}>
//                         <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
           </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Trebuchet MS',
        backgroundColor: 'white',
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    header: {
        fontSize:25,
        fontWeight:600,
    },
    inputGroup: {
        marginBottom: 10,
        marginTop: 50,
        margin: 20,
    },
    fname: {
        width: '100%',
        height: 50,
        padding: 5,
        display: 'flex',
        marginBottom: 30,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
    },
    lname: {
         width: '100%',
        height: 50,
        padding: 5,
        display: 'flex',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
    },
    button: {
        display: 'block',
        width: '80%',
        padding: 15,
        borderRadius: 30,
        backgroundColor: '#007bff',
        cursor: 'pointer',
        fontSize: 17,
        fontFamily: 'Trebuchet MS',
    },
    continue: {
        backgroundColor: 'orange',
        color: 'black',
        fontWeight: '600',
        marginTop: 420,
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
    navText: {
    fontSize: 25,
    fontWeight: 600,
    marginRight: 10
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // or any other background color you prefer
  },
});

export default Name;