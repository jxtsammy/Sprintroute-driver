import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const InviteFriendScreen = ({ }) => {
  const inviteCode = 'Invite COde';

  const handleInvite = () => {
    // Handle invite action
    console.log('Invite code:', inviteCode);
  };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.navText} >←</Text> 
        </TouchableOpacity>
        <Text style={styles.header}>Invite Friends</Text>
      </View>
      </SafeAreaView>
      <View style={styles.inviteContainer}>
        <Image
          source={require('../../assets/share2.png')} 
          style={styles.inviteImage}
        />
        <Text style={styles.inviteDescription}>
          When your friends sign up with this referral code, you can receive some free tips.
        </Text>
        <TextInput
          style={styles.inviteCodeInput}
          value={inviteCode}
          editable={false}
        />
        <TouchableOpacity style={styles.inviteButton} onPress={handleInvite}>
          <Text style={styles.inviteButtonText}>Invite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InviteFriend">
        <Stack.Screen
          name="InviteFriend"
          component={InviteFriendScreen}
          options={{ title: 'Invite Friend', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
   nav: {
        flexDirection: 'row',
        marginBottom: 0,
        marginRight: 150,
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
  inviteContainer: {
    alignItems: 'center',
    marginTop: 32,
  },
  
  inviteImage: {
    width: 400,
    height: 400,
    marginBottom: 16,
  },
  inviteDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  inviteCodeInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 30,
    padding: 12,
    width: '80%',
    textAlign: 'center',
    marginBottom: 16,
  },
  inviteButton: {
    backgroundColor: 'orange',
    padding: 16,
    borderRadius: 20,
    alignItems: 'center',
    width: '80%',
  },
  inviteButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default App;
