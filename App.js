import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Login from './app/Options/Login';
import SignUp from './app/Options/SignUp';
import Verification_Prompt from './app/Verification/Verification_Prompt';
import Home from './app/Homepage/Home';
import ChatScreen from './app/Homepage/ChatScreen';
import TripScreen from './app/Homepage/TripScreen';
import InviteScreen from './app/InviteScreen/InviteScreen';
import AddBank from './app/Setting & Other Screen/AddBank';
import EditProfileScreen from './app/Setting & Other Screen/EditProfileScreen';
import History from './app/Setting & Other Screen/History';
import Languages from './app/Setting & Other Screen/Languages';
import MyAccount from './app/Setting & Other Screen/MyAccount';
import Notifications from './app/Setting & Other Screen/Notifications';
import Safety from './app/Setting & Other Screen/Safety';
import SendComplaints from './app/Setting & Other Screen/SendComplaints';
import SupportScreen from './app/Setting & Other Screen/SupportScreen';
import License_Verification from './app/Personal Details/License_Verification';
import Name from './app/Personal Details/Name';
import Profile_Picture from './app/Personal Details/Profile_Picture';
import Bank_Details from './app/Payment_Details/Bank_Details';
import Vehicle_Info from './app/Vehicle_Info/Vehicle_Info';
import Vehicle_Image from './app/Vehicle_Info/Vehicle_Image';
import Road_Worthiness from './app/Vehicle_Info/Road_Worthiness';
import OTP_Verification from './app/Verification/OTP_Verification';
import EarnMoney from './app/Welcome Screens/EarnMoney';
import RegScreen from './app/Welcome Screens/RegScreen';
import UploadDocs from './app/Welcome Screens/UploadDocs';
import SuccessMsg from './app/SuccessMsg';
import ToggleLocation from './app/Toggle Location';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerContent = (props) => {
  const { navigation } = props;
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Home" onPress={() => navigation.navigate('Home')} />
      <DrawerItem label="My Account" onPress={() => navigation.navigate('MyAccount')} />
      <DrawerItem label="History" onPress={() => navigation.navigate('History')} />
      <DrawerItem label="Notifications" onPress={() => navigation.navigate('Notifications')} />
      <DrawerItem label="Languages" onPress={() => navigation.navigate('Languages')} />
      <DrawerItem label="Safety" onPress={() => navigation.navigate('Safety')} />
      <DrawerItem label="Support" onPress={() => navigation.navigate('SupportScreen')} />
      <DrawerItem label="Send Complaints" onPress={() => navigation.navigate('SendComplaints')} />
      <DrawerItem label="Invite Friends" onPress={() => navigation.navigate('InviteScreen')} />
      <DrawerItem label="Logout" onPress={() => navigation.navigate('Login')} />
    </DrawerContentScrollView>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
      <Stack.Screen name="VerificationPrompt" component={Verification_Prompt} options={{ title: 'Verification' }} />
      <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ title: 'Chat' }} />
      <Stack.Screen name="TripScreen" component={TripScreen} options={{ title: 'Trip' }} />
      <Stack.Screen name="InviteScreen" component={InviteScreen} options={{ title: 'Invite' }} />
      <Stack.Screen name="AddBank" component={AddBank} options={{ title: 'Add Bank' }} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{ title: 'Edit Profile' }} />
      <Stack.Screen name="History" component={History} options={{ title: 'History' }} />
      <Stack.Screen name="Languages" component={Languages} options={{ title: 'Languages' }} />
      <Stack.Screen name="MyAccount" component={MyAccount} options={{ title: 'My Account' }} />
      <Stack.Screen name="Notifications" component={Notifications} options={{ title: 'Notifications' }} />
      <Stack.Screen name="Safety" component={Safety} options={{ title: 'Safety' }} />
      <Stack.Screen name="SendComplaints" component={SendComplaints} options={{ title: 'Send Complaints' }} />
      <Stack.Screen name="SupportScreen" component={SupportScreen} options={{ title: 'Support' }} />
      <Stack.Screen name="License_Verification" component={License_Verification} options={{ title: 'License Verification' }} />
      <Stack.Screen name="Name" component={Name} options={{ title: 'Name' }} />
      <Stack.Screen name="Profile_Picture" component={Profile_Picture} options={{ title: 'Profile Picture' }} />
      <Stack.Screen name="Bank_Details" component={Bank_Details} options={{ title: 'Bank Details' }} />
      <Stack.Screen name="Vehicle_Info" component={Vehicle_Info} options={{ title: 'Vehicle Info' }} />
      <Stack.Screen name="Vehicle_Image" component={Vehicle_Image} options={{ title: 'Vehicle Image' }} />
      <Stack.Screen name="Road_Worthiness" component={Road_Worthiness} options={{ title: 'Road Worthiness' }} />
      <Stack.Screen name="OTP_Verification" component={OTP_Verification} options={{ title: 'OTP Verification' }} />
      <Stack.Screen name="EarnMoney" component={EarnMoney} options={{ title: 'Earn Money' }} />
      <Stack.Screen name="RegScreen" component={RegScreen} options={{ title: 'Register' }} />
      <Stack.Screen name="UploadDocs" component={UploadDocs} options={{ title: 'Upload Docs' }} />
      <Stack.Screen name="SuccessMsg" component={SuccessMsg} options={{ title: 'Success' }} />
      <Stack.Screen name="ToggleLocation" component={ToggleLocation} options={{ title: 'Toggle Location' }} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="MainStack" component={StackNavigator} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
