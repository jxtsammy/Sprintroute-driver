import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { useNavigation } from '@react-navigation/native'

const OTP_Verifications = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(0);
  const [newOtpRequestText, setNewOtpRequestText] = useState("Request new OTP");
  const navigation = useNavigation();
  const handleNextScreen = () => {
    navigation.navigate('SuccessMsg');
  };

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
        setNewOtpRequestText("Request new OTP")
      } else {
        setNewOtpRequestText("Request new OTP");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleRequestNewOtp = () => {
    // Implement your logic to request a new OTP here
    // For example: initiate an API call or reset the timer
    // ...
    setTimer(5); // Reset the timer
    setNewOtpRequestText("Requesting..."); // Show loading state
  }


  return (
    <View style={styles.body}>
      <TouchableOpacity
        onPress={() => {
          /* navigate back functionality */
        }}
      ></TouchableOpacity>
      <View style={styles.title}>
        <Text style={styles.header}>Phone Verification</Text>
        <Text style={styles.subtitle}>Enter your OTP here</Text>
      </View>
      <View style={styles.vcode}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => {
              if (index < otp.length - 1) {
                this.refs[`input_${index + 1}`].focus();
              } else {
                // Last input, handle submission (e.g., verify OTP)
              }
            }}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>
      <TouchableOpacity style={[styles.button, styles.verify]} onPress={handleNextScreen}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
      <Text onPress={handleRequestNewOtp} style={styles.request}>
        {newOtpRequestText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    fontFamily: "Arial",
    backgroundColor: "#f5f5f5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    marginBottom: 40,
    textAlign: "center",
    lineHeight: 10
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10
  },
  subtitle :{
    textAlign: 'center'
  },
  input: {
    width: 40,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
    marginBottom: 40,
    fontSize: 20,
    textAlign: "center",
    marginRight: 10,
    outline: "1px solid black"
  },
  vcode: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    display: "block",
    width: "80%",
    padding: 10,
    borderRadius: 30,
    color: "black",
    fontWeight: "700",
    fontSize: 18,
    backgroundColor: "#007bff",
    cursor: "pointer",
    marginBottom: 10,
    textAlign: "center"
  },
  verify: {
    backgroundColor: "orange",
    padding: 15
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontFamily: "Trebuchet MS",
    fontWeight: '600',
  },
  request:{
    color: 'orange',
  }
});

export default OTP_Verifications;
