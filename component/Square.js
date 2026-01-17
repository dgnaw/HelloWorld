import React from "react";
import {StyleSheet , Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Square(){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.square}>
                <Text style={styles.text}>Hello, World!</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
    square : {
    width : 200,
    height : 200,
    backgroundColor : '#69dd1b',
    borderRadius : 5,
    justifyContent : 'center',
  },
    text : {
    color : '#1d1d19',
    textAlign : 'center'
  }
})
