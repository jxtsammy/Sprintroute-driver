import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '1',
    status: 'Completed',
    statusColor: '#00C853',
    from: 'Pickup Location',
    to: 'Destination',
    amount: 'Amount',
    date: 'DD/MM/YYYY',
  },
  {
    id: '2',
    status: 'Cancel',
    statusColor: '#D50000',
    from: 'Pickup Location',
    to: 'Destination',
    amount: 'Amount',
    date: 'DD/MM/YYYY',
  },
];


const HistoryScreen = () => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.statusContainer}>
          <Text style={[styles.statusText, { backgroundColor: item.statusColor + '20', color: item.statusColor }]}>
            {item.status}
          </Text>
        </View>
        <View style={styles.routeContainer}>
          <View style={styles.dotLineContainer}>
            <View style={[styles.dot, { backgroundColor: item.statusColor }]} />
            <View style={styles.line} />
            <View style={styles.dot} />
          </View>
          <View style={styles.routeTextContainer}>
            <Text style={styles.routeText}>{item.from}</Text>
            <Text style={styles.routeText}>{item.to}</Text>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.amount}>{item.amount}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.navText} >←</Text> 
        </TouchableOpacity>
        <Text style={styles.header}>History</Text>
      </View>
      </SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
  list: {
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
    elevation: 3,
  },
  cardContent: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  statusContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 10,
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  routeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  dotLineContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  dot: {
    width: 12,
    height: 12,
    backgroundColor: '#E0E0E0',
    borderRadius: 6,
  },
  line: {
    width: 2,
    height: 20,
    backgroundColor: '#E0E0E0',
    marginVertical: 5,
  },
  routeTextContainer: {
    flex: 1,
  },
  routeText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange',
  },
  date: {
    fontSize: 14,
    color: '#9E9E9E',
  },
});

export default HistoryScreen;
