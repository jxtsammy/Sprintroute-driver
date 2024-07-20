import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import LicenceVerification from '../Personal Details/License_Verification'

const DatePicker = () => {
   const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const navigation = useNavigation();
    const handleNextScreen = () => {
            navigation.navigate(LicenceVerification); 
      };

  const years = Array.from({ length: 11 }, (_, i) => ({ label: `${2020 + i}`, value: `${2020 + i}` }));
  const months = [
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' },
  ];
  const days = Array.from({ length: 31 }, (_, i) => ({ label: `${i + 1}`, value: `${i + 1}` }));

  return (
    <View style={styles.container}>
     <SafeAreaView>
        <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.navText} >←</Text> 
        </TouchableOpacity>
        <Text style={styles.header}>Road Worthiness</Text>
      </View>
      </SafeAreaView>
      <Image
        source={require('../../assets/RoadWorthy.png')}
        style={styles.image}
      />
      <Text style={styles.subtitle}>
        Please enter the date expiry date on your vehicle's road worthiness sticker
      </Text>
      <View style={styles.inputGroup}>
      <View style={styles.inputDate}>
        <RNPickerSelect
          onValueChange={(value) => setDay(value)}
          items={days}
          style={pickerSelectStyles}
          placeholder={{ label: 'Day', value: null, color:'black', fontSize: 25 }}
        />
      </View>
      <View style={styles.inputDate}>
        <RNPickerSelect
          onValueChange={(value) => setMonth(value)}
          items={months}
          style={pickerSelectStyles}
          placeholder={{ label: 'Month', value: null, color:'grey', fontSize: 20 }}
        />
      </View>
      <View style={styles.inputDate}>
        <RNPickerSelect
          onValueChange={(value) => setYear(value)}
          items={years}
          style={pickerSelectStyles}
          placeholder={{ label: 'Year', value: null, color:'grey', fontSize: 20 }}
        />
      </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNextScreen}>
        <Text style={styles.buttonText}>Continue</Text>
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
        marginBottom: 100,
        marginRight: 140,
        display: 'flex',
        alignItems: 'center',
    justifyContent: 'center'
    },
  header: {
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'Trebuchet MS',
  },
  navText: {
    fontSize: 30,
    fontWeight: '600',
    marginRight: 10,
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
        marginBottom: 30,
        marginTop: 20,
        margin: 20,
        height: 40,
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
     
  },
  inputDate: {
        width: '30%', 
        height: '100%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: '#fff',
    marginTop: 20,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: '#fff',
    marginBottom: 10,
  }
});
export default DatePicker;
