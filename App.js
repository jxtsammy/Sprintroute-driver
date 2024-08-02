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
    <Stack.Navigator initialRouteName="RegScreen">
      {/* <Stack.Screen name="Login" component={RegScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={UploadDocs} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={EarnMoney} options={{ headerShown: false }} /> */}
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="VerificationPrompt" component={Verification_Prompt} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TripScreen" component={TripScreen} options={{ headerShown: false }} />
      <Stack.Screen name="InviteScreen" component={InviteScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AddBank" component={AddBank} options={{ headerShown: false }} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="History" component={History} options={{ headerShown: false }} />
      <Stack.Screen name="Languages" component={Languages} options={{ headerShown: false }} />
      <Stack.Screen name="MyAccount" component={MyAccount} options={{ headerShown: false }} />
      <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
      <Stack.Screen name="Safety" component={Safety} options={{ headerShown: false }} />
      <Stack.Screen name="SendComplaints" component={SendComplaints} options={{ headerShown: false }} />
      <Stack.Screen name="SupportScreen" component={SupportScreen} options={{ headerShown: false }} />
      <Stack.Screen name="License_Verification" component={License_Verification} options={{ headerShown: false }} />
      <Stack.Screen name="Name" component={Name} options={{ headerShown: false }} />
      <Stack.Screen name="Profile_Picture" component={Profile_Picture} options={{ headerShown: false }} />
      <Stack.Screen name="Bank_Details" component={Bank_Details} options={{ headerShown: false }} />
      <Stack.Screen name="Vehicle_Info" component={Vehicle_Info} options={{ headerShown: false }} />
      <Stack.Screen name="Vehicle_Image" component={Vehicle_Image} options={{ headerShown: false }} />
      <Stack.Screen name="Road_Worthiness" component={Road_Worthiness} options={{ headerShown: false }} />
      <Stack.Screen name="OTP_Verification" component={OTP_Verification} options={{ headerShown: false }} />
      <Stack.Screen name="EarnMoney" component={EarnMoney} options={{ headerShown: false }} />
      <Stack.Screen name="RegScreen" component={RegScreen} options={{ headerShown: false }} />
      <Stack.Screen name="UploadDocs" component={UploadDocs} options={{ headerShown: false }} />
      <Stack.Screen name="SuccessMsg" component={SuccessMsg} options={{ headerShown: false }} />
      <Stack.Screen name="ToggleLocation" component={ToggleLocation} options={{ headerShown: false }} />
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
