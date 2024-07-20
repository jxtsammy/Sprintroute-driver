import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';

const EditCardPage = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Card</Text>
      </View>
      </SafeAreaView>
      <Card style={styles.card}>
        <Text style={styles.cardText}>VISA</Text>
        <Text style={styles.cardNumber}>Account No</Text>
        <View style={styles.cardDetails}>
          <Text style={styles.cardName}>Account Name</Text>
          <Text style={styles.cardExpiry}>Expiry Date</Text>
        </View>
      </Card>
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="Black" />
        <TextInput
          style={styles.input}
          placeholder="Account Name"
          placeholderTextColor="grey"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="credit-card" size={20} color="Black" />
        <TextInput
          style={styles.input}
          placeholder="Account No"
          placeholderTextColor="grey"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="calendar" size={20} color="Black" />
        <TextInput
          style={styles.input}
          placeholder="Expiry Date (DD/MM/YYYY)"
          placeholderTextColor="grey"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="bank" size={20} color="Black" />
        <TextInput
          style={styles.input}
          placeholder="Bank Name"
          placeholderTextColor="grey"
        />
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Card</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  card: {
    backgroundColor: 'orange',
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 20,
    marginVertical: 10,
  },
  cardText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardNumber: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardName: {
    color: 'color',
    fontSize: 16,
  },
  cardExpiry: {
    color: 'black',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 2,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: 'black',
  },
  saveButton: {
    backgroundColor: 'orange',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    marginTop: 50
  },
  saveButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditCardPage;
