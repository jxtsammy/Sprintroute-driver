import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaymentDetails = () => {
    const navigation = useNavigation();
    const handleNextScreen = () => {
            navigation.navigate('Verification_Prompt');
      };
  return (
    <View style={styles.container}>
     <SafeAreaView>
        <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.navText} >←</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Payment Details</Text>
      </View>
      </SafeAreaView>
      <Image
        source={require('../../assets/PaymentDetails.png')}
        style={styles.image}
      />
      <Text style={styles.subtitle}>
        Enter legit bank details for payment transactions
      </Text>
      <View style={styles.inputGroup}>
                        <TextInput  style={styles.bname} placeholder="Bank Name"  placeholderTextColor="grey"/>
                        <TextInput style={styles.accNo} placeholder="Account Name" placeholderTextColor="grey"/>
                        <TextInput style={styles.accNo} placeholder="Account No" placeholderTextColor="grey"/>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleNextScreen}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
        flexDirection: 'row',
        marginBottom: 60,
        marginRight: 150
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  inputGroup: {
        marginBottom: 20,
        marginTop: 30,
        margin: 20,
        width: '95%',
    },
    bname: {
        width: '100%',
        height: 40,
        padding: 10,
        marginBottom: 30,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 18
    },
    accNo: {
         width: '100%',
        height: 40,
        padding: 10,
        display: 'flex',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 30,
        fontSize: 18
    },
  button: {
    backgroundColor: '#FF8000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '80%',
    marginBottom: 80,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PaymentDetails;
