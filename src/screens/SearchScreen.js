import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: term,
        location: 'san jose',
      }
    });
    setResults=(response.data.businesses);

  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}       // uguale a {(newTerm)=> setTerm(newTerm)}
        onTermSubmit={searchApi}    // uguale a  {()=>searchApi()}
        />
      <Text>Abbiamo trovato {results.length} risultati</Text>
    </View>
  );
};

const styles = StyleSheet.create ({});

export default SearchScreen;
