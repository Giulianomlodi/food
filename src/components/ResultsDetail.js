import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetail = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{uri: result.image_url}} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.rating}>{result.rating} Stelle, {results.review_count} Valutazioni</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    marginLeft:10,
  },


  imageStyle: {
    height:250,
    width: 250,
    borderRadius:4,
    marginBottom:5,
  },
  name: {
    fontWeight:'bold',
    //fontSize:16,
  },
  rating: {
    fontSize:15,
  }

});

export default ResultsDetail;
