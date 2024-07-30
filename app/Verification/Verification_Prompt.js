import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import phoneVerification from './OTP_Verification'

const Verification_Prompt = () => {

  const navigation = useNavigation();
    const handleOTPRequest = () => {
        navigation.navigate(phoneVerification);
    };
    return (
        <View style={styles.body}>
                <Image source={require('../../assets/Secure.png')} style={styles.image} />
                <Text style={styles.header}>OTP Verification</Text>
                <Text style={styles.message}>An OTP number would be sent to your number for Verification</Text>
                <TouchableOpacity style={[styles.button, styles.continue]} onPress={handleOTPRequest}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        fontFamily: 'Arial',
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontWeight: '600',
        fontSize: 35,
        textAlign: 'center',
        marginBottom: 5
    },
    image: {
        width: 250,
        height: 250,
        marginVertical: 20,
      },
    button: {
        display: 'block',
        width: '80%',
        padding: 15,
        borderRadius: 30,
        color: 'black',
        backgroundColor: 'orange',
        cursor: 'pointer',
        marginBottom: 100,
        fontSize: 17,
        fontFamily: 'Trebuchet MS',
    },
    continue: {
        backgroundColor: 'orange',
        color: 'black',
        fontWeight: '600',
        textAlign:'center'
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 600,
        textAlign: 'center',
        fontFamily: 'Trebuchet MS',
    },
    message: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        marginBottom: 40,
    },
    logo:{
      flex: 1,
      height:50,
      width: 50
    }
});

export default Verification_Prompt;