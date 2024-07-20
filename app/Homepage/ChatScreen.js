import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, FlatList, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  

  const sendMessage = () => {
    if (inputText.trim().length > 0) {
      const newMessage = {
        id: (messages.length + 1).toString(),
        sender: 'User',
        text: inputText,
        type: 'sent',
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={[styles.messageContainer, item.type === 'sent' ? styles.sent : styles.received]}>
      <Text style={[styles.messageText, item.type === 'sent' ? styles.sentText : styles.receivedText]}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('../../assets/Placeholder.png')} style={styles.profileImage} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.profileName}>Driver ID</Text>
            <Text style={styles.status}>Active now</Text>
          </View>
        </View>
        <TouchableOpacity  style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.chatContainer}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={80}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message"
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerTextContainer: {
    marginLeft: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    color: 'grey',
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#000',
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 20,
    maxWidth: '75%',
  },
  sent: {
    alignSelf: 'flex-end',
    backgroundColor: 'orange',
  },
  received: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  messageText: {
    color: '#FFF',
  },
  sentText: {
    color: 'black',
  },
  receivedText: {
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  input: {
    flex: 1,
    backgroundColor: '#Ffff',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: 'orange',
    borderRadius: 20,
    padding: 10,
  },
  sendButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ChatScreen;
