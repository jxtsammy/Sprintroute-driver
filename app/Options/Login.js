// app/Options/Login.js
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const handleSignUpPress = () => {
    navigation.navigate('SignUp'); // Use the screen name
  };

  const handleLogInPress = () => {
    navigation.navigate('VerificationPrompt'); // Use the screen name
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.header}>Login your account</Text>
        <View style={styles.inputGroup}>
          <TextInput
            style={[styles.input, styles.ccode]}
            placeholder="+"
            keyboardType="phone-pad"
            placeholderTextColor="black"
          />
          <TextInput
            style={[styles.input, styles.number]}
            placeholder="phone"
            keyboardType="phone-pad"
            required
          />
        </View>
        <TouchableOpacity style={[styles.button, styles.continueButton]} onPress={handleLogInPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.alt}>
          Dont have an account? <TouchableOpacity style={styles.alttext} onPress={handleSignUpPress}><Text style={styles.alttext}>Sign Up</Text></TouchableOpacity>
        </Text>
      </SafeAreaView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '',
    padding: 20,
  },
  safeArea: {
    width: '100%',
    alignItems: 'center',
  },
  header: {
    fontSize: 35,
    fontWeight: '600',
    fontFamily: 'Trebuchet MS',
    marginBottom: 30
  },
  inputGroup: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    placeholder: "black"
  },
  ccode: {
    width: '20%',
    marginRight: 5,
  },
  number: {
    width: '75%',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  continueButton: {
    backgroundColor: 'orange',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Trebuchet MS',
  },
  alt: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
    fontWeight:'600',
    fontFamily: 'Trebuchet MS',
  },
  alttext:{
    fontSize: 18,
    fontWeight:'600',
    color:"orange",
    fontFamily: 'Trebuchet MS',
  },
})

export default Login;