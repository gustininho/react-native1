import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../API/yelp';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [error,setError]= useState('');

  const searchApi = async searchTerm => {
    try {
    const response = await yelp.get('/search', {
      params: {
        limit : 50,
        term: term,
        location: 'miami'
              }
    });
    setResults(response.data.businesses);
  } catch(err) {
    setError('Something went wrong')
  }
};

  useEffect(() => {
    searchApi('pasta');
  },[]);

  const filterResultsByPrice = (price) => {
    return results.filter(results => {
      return results.price === price;
    })
  };

  return (
    <View style={{flex:1}}>
      <SearchBar
      term={term}
      onTermChange={(newTerm) => setTerm(newTerm)}
      onTermSubmit={() => searchApi()} />
      { error ? <Text>{error}</Text> : null }
      <ScrollView>
      <ResultsList  results={filterResultsByPrice('$')} title="Cost Effective"/>
      <ResultsList  results={filterResultsByPrice('$$')} title="Bit Pricier"/>
      <ResultsList  results={filterResultsByPrice('$$$')} title="Big Spender"/>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({});

export default SearchScreen;
