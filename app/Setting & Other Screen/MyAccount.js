import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'
import EditProfile from './EditProfileScreen'
import AddBank from './AddBank'

const MyAccountPage = () => {
    const navigation = useNavigation();
    const handleNextScreen = () => {
      navigation.navigate(EditProfile); 
    };

    const handleAddBankScreen = () => {
            navigation.navigate(AddBank); 
      };
  return (
    <ScrollView style={styles.container}>
    <SafeAreaView>
        <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.navText} >←</Text> 
        </TouchableOpacity>
        <Text style={styles.header}>My Account</Text>
      </View>
      </SafeAreaView>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/Placeholder.png')}
          style={styles.profileImage}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Username</Text>
          <Text style={styles.profileEmail}>user@email.com</Text>
          <Text style={styles.profilePhone}>Phone No</Text>
        </View>
        <TouchableOpacity style={styles.editIcon} onPress={handleNextScreen}>
          <Icon name="pencil" size={24} color="orange" />
        </TouchableOpacity>
      </View>
      <View style={styles.bankContainer}>
        <View style={styles.bankDetails}>
          <Icon name="bank" size={40} color="orange" />
          <View style={styles.bankText}>
            <Text style={styles.bankName}>BANK OF GHANA</Text>
            <Text style={styles.bankType}>Primary account</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.editIcon}>
          <Icon name="pencil" size={24} color="orange" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.addBank} onPress={handleAddBankScreen}>
        <Icon name="plus" size={24} color="orange" />
        <Text style={styles.addBankText}>ADD BANK ACCOUNT</Text>
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <TouchableOpacity style={styles.linkItem}>
          <Icon name="history" size={24} color="black" />
          <Text style={styles.linkText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkItem}>
          <Icon name="globe" size={24} color="black" />
          <Text style={styles.linkText}>Change Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkItem}>
          <Icon name="wallet" size={24} color="black" />
          <Text style={styles.linkText}>Wallet</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.deleteAccount}>
        <Text style={styles.deleteAccountText}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  nav: {
        flexDirection: 'row',
        marginBottom: 40,
        marginLeft: 20
    },
header: {
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'Trebuchet MS',
},
navText: {
    fontSize: 25,
    fontWeight: 600,
    marginRight: 10
  },
  
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 2,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileDetails: {
    flex: 1,
    marginLeft: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
    color: 'grey',
  },
  profilePhone: {
    fontSize: 14,
    color: 'grey',
  },
  editIcon: {
    padding: 10,
  },
  bankContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 2,
  },
  bankDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  bankText: {
    marginLeft: 15,
  },
  bankName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bankType: {
    fontSize: 14,
    color: 'grey',
  },
    addBank: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 2,
    justifyContent: 'center',
  },
  addBankText: {
    fontSize: 16,
    marginLeft: 10,
    color: 'Black',
  },
  linksContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    elevation: 2,
  },
  linkText: {
    fontSize: 16,
    marginLeft: 10,
  },
  deleteAccount: {
    alignItems: 'center',
    marginVertical: 10,
  },
  deleteAccountText: {
    color: 'red',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: 'orange',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  logoutButtonText: {
    color: 'Black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyAccountPage;
