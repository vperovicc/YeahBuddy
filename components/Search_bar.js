import search from '../styles/search'
import { View, Text } from "react-native";
import * as Font from 'expo-font';
import React, { useEffect } from "react";

const loadFonts = async ()=>{
  await Font.loadAsync({
      'Orbitron-VariableFont_wght': require('../assets/fonts/Orbitron-VariableFont_wght.ttf'),
  });
}

const Search_bar = () => {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <View style={search.bar}>
        <Text style={search.text}>Search...</Text>
    </View>
  )
}

export default Search_bar