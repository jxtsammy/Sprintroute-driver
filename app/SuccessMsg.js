import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Success = () => {
  const navigation = useNavigation();
    const handleNextScreen = () => {
            navigation.navigate('Home');
      };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/VerifiedDriver.png')} style={styles.image} />
      <Text style={styles.title}>Successfully Verified</Text>
      <Text style={styles.subtitle}>
        You have been Verified Successfully, continue to homepage to start using the app
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleNextScreen}>
        <Text style={styles.buttonText}>Continue </Text>
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
  image: {
    width: 350,
    height: 350,
    marginBottom: 20,
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
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#FF8000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight:'600'
  },
});

export default Success;
