import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HelpScreen = () => {
  const navigation = useNavigation();
  const handlePress = (topic) => {
    // Handle navigation or actions for each topic
    console.log(`Navigating to ${topic}`);
  };

  return (
    <SafeAreaView style = {styles.safeArea}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.navText} >← Back</Text>
        </TouchableOpacity>
      <View style={styles.container}>
      <Text style={styles.header}>Help</Text>
      <TouchableOpacity onPress={() => handlePress('Review')}>
        <Text style={styles.item}>Leave a review for a driver</Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity onPress={() => handlePress('Response')}>
        <Text style={styles.item}>Drivers do not respond</Text>
      </TouchableOpacity>
        <View style={styles.line} />
      <TouchableOpacity onPress={() => handlePress('Complain')}>
        <Text style={styles.item}>Sending complains</Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity onPress={() => handlePress('Belongings')}>
        <Text style={styles.item}>Finding belongings left behind</Text>
      </TouchableOpacity><View style={styles.line} />
      <TouchableOpacity onPress={() => handlePress('TechicalSupport')}>
        <Text style={styles.item}>FAQ</Text>
      </TouchableOpacity>
      <View style={styles.feedback}>
        <Text style={styles.header}>Feedback</Text>
      <TouchableOpacity onPress={() => handlePress('Email')}>
        <Text style={styles.item}>Send us your feedback</Text>
      </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  safeArea: {
    flex: 1,
  },
  navText: {
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 600,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    fontSize: 18,
    marginVertical: 15, 
  },
  line:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    marginVertical: 5,
  },
  feedback:{
    marginTop: 40,
  }
});

export default HelpScreen;
