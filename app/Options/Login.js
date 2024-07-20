import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import SignUp from './SignUp'
import { useNavigation } from '@react-navigation/native'
import Verification_Prompt from '../Verification/Verification_Prompt'


const Login = () =>{
    const navigation = useNavigation();
    const handleSignUpPress = () => {
        navigation.navigate(SignUp); 
    };
    const handleLogInPess = () => {
          navigation.navigate(Verification_Prompt); 
    };
  return (
    <View style={styles.container}>
      <SafeAreaView>
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
      <TouchableOpacity style={[styles.button, styles.continueButton]}>
        <Text style={styles.buttonText} onPress={handleLogInPess}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.alt}>
        Dont have an account? <TouchableOpacity style={styles.alt2} onPress={handleSignUpPress}><Text style={styles.alttext}>Sign Up</Text></TouchableOpacity>
      </Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '',
    padding: 20,
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