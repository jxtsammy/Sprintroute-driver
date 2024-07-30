import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';


const VehicleInfo = () => {
    const navigation = useNavigation();
    const handleLicenseInfoPress = () => {
            navigation.navigate('Vehicle_Image');
      };
    return (
           <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <View style={styles.nav}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={styles.navText} >←</Text>
                        </TouchableOpacity>
                        <Text style={styles.header}>Vehicle Information</Text>
                    </View>
                    <View style={styles.inputGroup}>
                        <TextInput  style={styles.fname} placeholder="Vehicle Brand"  placeholderTextColor="#555555"/>
                        <TextInput style={styles.lname} placeholder="Model" placeholderTextColor="#555555" />
                        <TextInput  style={styles.fname} placeholder="Year"  placeholderTextColor="#555555"/>
                        <TextInput  style={styles.fname} placeholder="Lincense Plate No"  placeholderTextColor="#555555"/>
                        <TextInput  style={styles.fname} placeholder="Color"  placeholderTextColor="#555555"/>
                    </View>
                    <TouchableOpacity style={[styles.button, styles.continue]} onPress={handleLicenseInfoPress}>
                        <Text style={styles.buttonText}>Continue</Text>
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
        height: 55,
        padding: 5,
        display: 'flex',
        marginBottom: 30,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 20
    },
    lname: {
         width: '100%',
        height: 55,
        padding: 5,
        display: 'flex',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 30,
        fontSize: 20
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
        marginTop: 120,
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
    fontSize: 20,
    fontWeight: 600,
    marginRight: 10
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // or any other background color you prefer
  },
});

export default VehicleInfo;