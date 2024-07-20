import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';

const ComplaintPage = () => {
  const [complaintText, setComplaintText] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <SafeAreaView>
        <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.navText} >←</Text> 
        </TouchableOpacity>
        <Text style={styles.header}>Make a Complaint</Text>
      </View>
      </SafeAreaView>
        <Image
          source={require('../../assets/Complaint.png')} 
          style={styles.image}
        />
        <TextInput
          style={styles.textArea}
          placeholder="Write your complaint here "
          multiline={true}
          numberOfLines={4}
          value={complaintText}
          onChangeText={(text) => setComplaintText(text)}
        />
      </ScrollView>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'White', 
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 80, 
  },
  nav: {
        flexDirection: 'row',
        marginBottom: 30,
        marginRight: 100,
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
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 8,
    padding: 10,
    textAlignVertical: 'top',
    backgroundColor: '#F5F5F5', // White background
    marginBottom: 20,
    height: 150, // Adjust the height to fit your design
  },
  submitButton: {
    backgroundColor: 'orange', // Blue color
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
  },
  submitButtonText: {
    color: 'black', // White text
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ComplaintPage;
