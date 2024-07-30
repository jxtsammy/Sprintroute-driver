import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const languages = [
  { name: 'English', code: 'en', flag: 'https://flagcdn.com/w320/us.png' },
  { name: 'Hindi', code: 'hi', flag: 'https://flagcdn.com/w320/in.png' },
  { name: 'Arabic', code: 'ar', flag: 'https://flagcdn.com/w320/sa.png' },
  { name: 'French', code: 'fr', flag: 'https://flagcdn.com/w320/fr.png' },
  { name: 'German', code: 'de', flag: 'https://flagcdn.com/w320/de.png' },
  { name: 'Portuguese', code: 'pt', flag: 'https://flagcdn.com/w320/pt.png' },
  { name: 'Turkish', code: 'tr', flag: 'https://flagcdn.com/w320/tr.png' },
  { name: 'Dutch', code: 'nl', flag: 'https://flagcdn.com/w320/nl.png' },
];

const LanguageSelectionScreen = ({ }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const navigation = useNavigation();

  const handleLanguageSelect = (code) => {
    setSelectedLanguage(code);
  };

  const handleSave = () => {
    // Handle save action
    console.log('Selected language:', selectedLanguage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Change Language</Text>
      </View>
      <ScrollView>
        {languages.map((language) => (
          <TouchableOpacity
            key={language.code}
            style={[
              styles.languageOption,
              selectedLanguage === language.code && styles.selectedOption,
            ]}
            onPress={() => handleLanguageSelect(language.code)}
          >
            <Image source={{ uri: language.flag }} style={styles.flag} />
            <View style={styles.languageTextContainer}>
              <Text style={styles.languageName}>{language.name}</Text>
              <Text style={styles.languageCode}>{language.code}</Text>
            </View>
            {selectedLanguage === language.code && (
              <Ionicons name="checkmark-circle" size={24} color="#FDC900" />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'orange',
    marginBottom: 12,
  },
  selectedOption: {
    borderColor: 'orange',
  },
  flag: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  languageTextContainer: {
    flex: 1,
  },
  languageName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  languageCode: {
    fontSize: 14,
    color: '#888',
  },
  saveButton: {
    backgroundColor: 'orange',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default LanguageSelectionScreen;
