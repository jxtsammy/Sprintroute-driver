import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Safety = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.navText} >←</Text> 
        </TouchableOpacity>
        <Text style={styles.header}>Safety</Text>
      </View>
      </SafeAreaView>
      <View style={styles.centerIconContainer}>
        <View style={styles.centerIcon}>
          <Text style={styles.centerIconText}>✔️</Text>
        </View>
      </View>
      <Text style={styles.subtitle}>Who do you want to contact?</Text>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>🚑 Ambulance</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>🚓 Police</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>💬 Message support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>📋 Safety tips</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  nav: {
        flexDirection: 'row',
        marginBottom: 0,
        marginRight: 250,
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
  centerIconContainer: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerIcon: {
    width: 70,
    height: 70,
    backgroundColor: '#ffcc00',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerIconText: {
    fontSize: 36,
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
  },
  option: {
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  optionText: {
    fontSize: 16,
  },
});

export default Safety;
