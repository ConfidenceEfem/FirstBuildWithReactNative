import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const LandingPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
      <View style={styles.textHolder}>
      <Text style={styles.HeadText}>Welcome, To Ajegune Blog</Text>
      </View>
      <View style={styles.knowButton}>
      <Button
       
       title="Learn More"
       color="red"
       onPress = {()=>{
         navigation.navigate("signup")
       }}
      > 
      </Button>
      </View>
      </View>
    </View>
  );
}

export default LandingPage;

const styles = StyleSheet.create({
  container:{
    flex: "1",
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  HeadText:{
    fontSize: "18px",
  },
  textHolder: {
     alignItems: "center",
    justifyContent: "center",
  },
  knowButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px"
  }
})
