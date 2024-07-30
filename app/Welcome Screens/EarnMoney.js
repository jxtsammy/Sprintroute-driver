import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'

const EarnMoneyScreen = () => {
    const navigation = useNavigation();
  const handleNextScreen = () => {
    navigation.navigate('Toggle Location');
  };
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Earn Money</Text>
      <Text style={styles.subtitle}>
        Complete the registration and start earning some Sprint money 🎉.
      </Text>
      <Image source={require('../../assets/EarnMoney.png')} style={styles.image} />
      <View style={styles.pagination}>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
        <View style={styles.activeDot}></View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNextScreen}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    alignItems: 'center',
    justifyContent: 'center',
  },



  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginHorizontal: 40,
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 30,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#888',
    margin: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#CCC',
    margin: 5,
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 50,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EarnMoneyScreen;
