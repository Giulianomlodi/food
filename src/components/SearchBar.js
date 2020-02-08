import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {EvilIcons} from '@expo/vector-icons';


const SearchBar = ({term, onTermChange}) => {
  return (
    <View style={styles.background}>
      <EvilIcons name="search" style={styles.icona}/>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.sezioneRicerca}
        placeholder="Cerca"
        value={term}
        onTermChange={ newTerm => onTermChange(newTerm)}
        onEndEditing={()=> console.log('submitted')}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor:'#CFD8D7',
    height:50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 5,
    flexDirection:'row',
    //alignItems:'center'
    //justifyContent:
  },
  sezioneRicerca: {
    flex:1,
    alignSelf:'center',
    //borderWidth:1

  },
  icona: {
    fontSize:40,
    alignSelf:'center',
  }

});

export default SearchBar;
