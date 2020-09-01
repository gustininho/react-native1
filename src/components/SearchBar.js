import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style= {styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle}/>
      <TextInput
       autoCorrect = {false}
       autoCapitalize ="none"
       placeholder="Search"
       style ={styles.inputStyle}
       value={term}
       onChangeText={onTermChange}
       onEndEditing={onTermSubmit}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginBottom: 10,
    marginTop: 15,
    backgroundColor:'#F0EEEE',
    height: 40,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  inputStyle: {
    fontSize: 18,
    flex: 1
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
