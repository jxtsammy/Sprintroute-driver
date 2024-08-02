import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Animated, Easing, Dimensions } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Trip = () => {

  const [buttonText, setButtonText] = useState('Start Pickup');
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').height)).current; // Start off-screen

  useEffect(() => {
    // Animate the sliding up effect
    Animated.timing(slideAnim, {
      toValue: 0, // Move to original position
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  const handleButtonPress = () => {
    if (buttonText === 'Start Pickup') {
      setButtonText('End Trip');
    } else {
      Alert.alert('Trip Ended', 'The trip has ended.', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    }
  };

  const navigation = useNavigation();
  const handleChatScreen = () => {
    navigation.navigate('ChatScreen');
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 6.6745,
          longitude: -1.5717,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker
          coordinate={{ latitude: 6.6745, longitude: -1.5717 }}
          image={require('../../assets/car.png')}
        />
        <Marker
          coordinate={{ latitude: 6.6954, longitude: -1.6162 }}
          pinColor="orange"
        />
        <Polyline
          coordinates={[
            { latitude: 6.6745, longitude: -1.5717 },
            { latitude: 6.6954, longitude: -1.6162 },
          ]}
          strokeColor="#000"
          strokeWidth={3}
        />
      </MapView>
      <Animated.View style={[styles.detailsContainer, { transform: [{ translateY: slideAnim }] }]}>
        <View style={styles.riderInfo}>
          <Avatar
            rounded
            source={require('../../assets/Placeholder.png')}
            size="medium"
          />
          <View style={styles.riderDetails}>
            <Text style={styles.riderName}>Michael Anang</Text>
            <Text style={styles.riderRating}>15 Min</Text>
          </View>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="phone" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={handleChatScreen}>
            <Icon name="envelope" size={20} color="black" />
          </TouchableOpacity>
        </View>
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
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    position: 'absolute',
    bottom: 0, // Position at the bottom
    width: '100%',
  },
  riderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  riderDetails: {
    flex: 1,
    marginLeft: 10,
  },
  riderName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  riderRating: {
    fontSize: 14,
    color: '#888',
  },
  iconButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 50,
    marginLeft: 10,
    color: 'black',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 20,
  },
  tripDetails: {
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  verticalLine: {
    width: 1,
    height: 40,
    backgroundColor: '#000',
    position: 'absolute',
    top: 20,
    left: 5,
    zIndex: -1,
  },
  tripTime: {
    fontSize: 14,
    color: '#888',
    marginRight: 10,
  },
  locationTextContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  tripLocation: {
    fontSize: 14,
  },
  button: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  star: {
    color: '#FFD700',
  },
});

export default Trip;
