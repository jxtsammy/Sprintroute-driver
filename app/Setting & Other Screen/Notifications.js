import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

const notifications = [
  { id: 1, type: 'System', message: 'You have sucessfully completed a trip' },
  { id: 2, type: 'Promotion', message: 'Invite friends - Get 3 coupons each!' },
  { id: 3, type: 'System', message: 'Payment to your account is complete.' },
  { id: 4, type: 'Promotion', message: 'Invite friends - Get 3 coupons each!' },
  { id: 5, type: 'System', message: 'You have sucessfully completed a trip' },
  { id: 6, type: 'Promotion', message: 'Invite friends - Get 3 coupons each!' },
];

const notification = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.navText} >←</Text> 
        </TouchableOpacity>
        <Text style={styles.header}>Notifications</Text>
      </View>
        <ScrollView style={styles.notificationsContainer}>
          {notifications.map(notification => (
            <View key={notification.id} style={styles.notification}>
              <Text style={[styles.type, notification.type === 'Promotion' ? styles.promotion : styles.system]}>
                {notification.type}
              </Text>
              <Text style={styles.message}>{notification.message}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
   nav: {
        flexDirection: 'row',
        marginBottom: 20,
        marginRight: 180,
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
  notificationsContainer: {
    width: '100%',
  },
  notification: {
    padding: 16,
    margin: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    height: 80
  },
  type: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 17
  },
  system: {
    color: 'black'
  },
  promotion: {
    color: 'green', // Color for Promotion notifications
  },
  message: {
    color: '#555',
  },
});

export default notification;
