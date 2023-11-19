import { View } from "react-native";
import React from "react";
import home from "../styles/home";
import Head from "../components/Header";
import Search_bar from "../components/Search_bar";

const Home=()=>{
    return (
    <View style={home.base}>
        <Head/>
        <Search_bar/>
    </View>
    )
}

export default Home;