import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Switch, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';


const MainScreen = () => {
  const [isOnline, setIsOnline] = useState(false);

  const toggleSwitch = () => setIsOnline(previousState => !previousState);
  const navigation = useNavigation();
  const handleAcceptButtonPress = () => {
    navigation.navigate('TripScreen');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="menu" size={24} color="#000" />
          </TouchableOpacity>
          <View style={styles.toggleContainer}>
            <Text style={styles.toggleText}>{isOnline ? 'Online' : 'Offline'}</Text>
            <Switch
              trackColor={{ false: '#767577', true: 'orange' }}
              thumbColor={isOnline ? 'white' : 'orange'}
              onValueChange={toggleSwitch}
              value={isOnline}
            />
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.profileContainer}>
        <Image source={require('../../assets/Placeholder.png')} style={styles.profileImage} />
        <View>
          <Text style={styles.helloText}>Sallo Samuel</Text>
          <Text style={styles.locationText}>Ghana</Text>
          <Text style={styles.locationText}>4.0</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>Ghc 30.00</Text>
          <Text style={styles.statLabel}>Overall earning</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>2</Text>
          <Text style={styles.statLabel}>Today Booking</Text>
        </View>
      </View>
      <Text style={styles.newRequestTitle}>New Request</Text>
      <TouchableOpacity style={styles.viewAll}>
        <Text style={styles.viewAllText}>View all</Text>
      </TouchableOpacity>
      <ScrollView>
        {/* Repeat this block for each request */}
        <View style={styles.requestCard}>
          <View style={styles.requestHeader}>
            <Image source={require('../../assets/Placeholder.png')} style={styles.requesterImage} />
            <View style={styles.headerInfo}>
              <Text style={styles.requesterName}>Michael Anang</Text>
              <View style={styles.requesterInfo}>
                <Icon name="clock" size={14} color="#555" />
                <Text style={styles.requestTime}>15 Min</Text>
              </View>
            </View>
            <View>
              <Text style={styles.requestPrice}>Ghc 20</Text>
              <Text style={styles.requestDistance}>2.4km</Text>
            </View>
          </View>
          <View style={styles.requestDetails}>
            <View style={styles.separator} />
            <View style={styles.tripDetails}>
              <View style={styles.locationContainer}>
                <View style={[styles.locationDot, { backgroundColor: 'orange' }]} />
                <View style={styles.verticalLine} />
                <Text style={styles.tripTime}>02:10 PM</Text>
                <View style={styles.locationTextContainer}>
                  <Text style={styles.tripLocation}>KNUST, Kumasi</Text>
                </View>
              </View>
              <View style={styles.locationContainer}>
                <View style={[styles.locationDot, { backgroundColor: 'green' }]} />
                <Text style={styles.tripTime}>02:30 PM</Text>
                <View style={styles.locationTextContainer}>
                  <Text style={styles.tripLocation}>Kumasi City Mall</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.declineButton}>
              <Text style={styles.declineButtonText}>Decline</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acceptButton} onPress={handleAcceptButtonPress}>
              <Text style={styles.acceptButtonText}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.requestCard}>
          <View style={styles.requestHeader}>
            <Image source={require('../../assets/Placeholder.png')} style={styles.requesterImage} />
            <View style={styles.headerInfo}>
              <Text style={styles.requesterName}>Gifty Appiah</Text>
              <View style={styles.requesterInfo}>
                <Icon name="clock" size={14} color="#555" />
                <Text style={styles.requestTime}>5 Min</Text>
              </View>
            </View>
            <View>
              <Text style={styles.requestPrice}>Ghc 10</Text>
              <Text style={styles.requestDistance}>1km</Text>
            </View>
          </View>
          <View style={styles.requestDetails}>
            <View style={styles.separator} />
            <View style={styles.tripDetails}>
              <View style={styles.locationContainer}>
                <View style={[styles.locationDot, { backgroundColor: 'orange' }]} />
                <View style={styles.verticalLine} />
                <Text style={styles.tripTime}>02:10 PM</Text>
                <View style={styles.locationTextContainer}>
                  <Text style={styles.tripLocation}>KNUST, Kumasi</Text>
                </View>
              </View>
              <View style={styles.locationContainer}>
                <View style={[styles.locationDot, { backgroundColor: 'green' }]} />
                <Text style={styles.tripTime}>02:30 PM</Text>
                <View style={styles.locationTextContainer}>
                  <Text style={styles.tripLocation}>Ejisu, Kumasi</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.declineButton}>
              <Text style={styles.declineButtonText}>Decline</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acceptButton} onPress={handleAcceptButtonPress}>
              <Text style={styles.acceptButtonText}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const DrawerContent = () => {
  const navigation = useNavigation();
  return (
  <DrawerContentScrollView>
    <View style={drawerStyles.container}>
      <View style={drawerStyles.profileContainer}>
        <Image source={require('../../assets/Placeholder.png')} style={drawerStyles.profileImage} />
        <Text style={drawerStyles.profileName}>Driver Name </Text>
      </View>
      <View style={drawerStyles.menuItems}>
      <DrawerItem label="Home" onPress={() => navigation.navigate('Home')} />
        <DrawerItem label="My Account" onPress={() => navigation.navigate('MyAccount')} />
        <DrawerItem label="History" onPress={() => navigation.navigate('History')} />
        <DrawerItem label="Notifications" onPress={() => navigation.navigate('Notifications')} />
        <DrawerItem label="Languages" onPress={() => navigation.navigate('Languages')} />
        <DrawerItem label="Safety" onPress={() => navigation.navigate('Safety')} />
        <DrawerItem label="Support and FAQ" onPress={() => navigation.navigate('SupportScreen')} />
        <DrawerItem label="Make Complaints" onPress={() => navigation.navigate('SendComplaints')} />
        <DrawerItem label="Invite Friends" onPress={() => navigation.navigate('InviteScreen')} />
        <DrawerItem label="About" onPress={() => navigation.navigate('About')} />
        <DrawerItem label="Privacy Policy & Terms" onPress={() => navigation.navigate('PrivacyPolicy')} />
        <DrawerItem label="Logout" onPress={() => navigation.navigate('Login')} style={styles.logout} />
      </View>
    </View>
  </DrawerContentScrollView>
  )
};

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainScreen} />
        <Drawer.Screen name="MyAccount" component={'MyAccount'} />
        <Drawer.Screen name="History" component={'History'} />
        <Drawer.Screen name="Notifications" component={'Notifications'} />
        <Drawer.Screen name="Languages" component={'Languages'} />
        <Drawer.Screen name="Safety" component={'Safety'} />
        <Drawer.Screen name="Support" component={'SupportScreen'} />
        <Drawer.Screen name="ComplaintPage" component={'SendComplaints'} />
        <Drawer.Screen name="Invite" component={'InviteScreen'} />
        <Drawer.Screen name="About" component={() => <View><Text>About</Text></View>} />
        <Drawer.Screen name="PrivacyPolicy" component={() => <View><Text>Privacy Policy & Terms</Text></View>} />
        <Drawer.Screen name="Logout" component={'Login'} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleText: {
    marginRight: 8,
    fontSize: 16,
    color: '#000',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 25,
    marginRight: 10,
  },
  helloText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  locationText: {
    fontSize: 14,
    color: '#555',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
  },
  statLabel: {
    fontSize: 14,
    color: '#555',
  },
  newRequestTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  viewAll: {
    alignSelf: 'flex-end',
    marginVertical: 10,
  },
  viewAllText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  requestCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  requestHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  requesterImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerInfo: {
    flex: 1,
  },
  requesterName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  requesterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  requestTime: {
    fontSize: 14,
    color: '#555',
    marginLeft: 5,
  },
  requestPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  requestDistance: {
    fontSize: 14,
    color: '#555',
  },
  requestDetails: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 10,
  },
  tripDetails: {
    marginVertical: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  locationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  verticalLine: {
    width: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 5,
    height: '100%',
  },
  tripTime: {
    fontSize: 14,
    color: '#555',
  },
  locationTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  tripLocation: {
    fontSize: 14,
    color: '#555',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  declineButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  declineButtonText: {
    fontSize: 14,
    color: '#555',
  },
  acceptButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
  },
  acceptButtonText: {
    fontSize: 14,
    color: '#fff',
  },
  logout:{
    marginTop: 80,
    color: 'red'
  }
});

const drawerStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItems: {
    marginTop: 20,
  },
});
