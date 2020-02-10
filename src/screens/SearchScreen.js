import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  const filterResultsByPrice = (price) => {
    // price può essere $ !! $$ !! $$$
    return results.filter(result => {
      return result.price === price;
    })

  };

  return (
    <View style={{flex:1}}>
      <SearchBar
        term={term}
        onTermChange={setTerm}       // uguale a {(newTerm)=> setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}    // uguale a  {()=>searchApi()}
        />
      {errorMessage ? <Text>{errorMessage}</Text> :null}
      <Text>Abbiamo trovato {results.length} risultati</Text>
      <ScrollView>
      <ResultsList results={filterResultsByPrice('$')} title="Economici" />
      <ResultsList results={filterResultsByPrice('$$')} title="Costosi"  />
      <ResultsList results={filterResultsByPrice('$$$')} title="Molto Costosi" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create ({});

export default SearchScreen;
