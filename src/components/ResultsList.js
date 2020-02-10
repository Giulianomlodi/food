import React from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';
const ResultsList = ({title , results}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal // same as horizontal={true}
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor = {(result)=> result.id }
        renderItem={({item})=>{
          return <ResultsDetail result={item} />;
        }}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    margin:15,
    fontSize:18,
    fontWeight:'bold',
  },
  container: {
    marginBottom:15,
  },

});

export default ResultsList;
