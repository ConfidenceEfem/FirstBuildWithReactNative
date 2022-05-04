import { useRoute } from '@react-navigation/native';
import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, Button} from 'react-native';
import data from "./data.json"


const Detail = () => {
  const route = useRoute()
  console.log(route.params.props)



  
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Detail Page</Text>
      <View style={styles.cardContainer}>
    <Image style={styles.imageChange}
    source={require(`../assets/${route.params.props.img}`)}
    />
    <Text style={styles.changeText}>{route.params.props.title}</Text>
   <View style={styles.textHolder}>
   <Text style={styles.descText}>{route.params.props.desc}</Text>
   </View>
    </View>
    
    </View>
  );
}

export default Detail;

const styles = StyleSheet.create({
    textHolder:{
        width: 350,
        lineHeight: "30px",
    },
    descText:{
        fontSize: "17px",
        color: "black",
        textAlign: "center", 
    
        paddingTop: "3px",
        paddingBottom: "25px",
    },
    container:{
        flex: "1",
        backgroundColor: "#eee",
        alignItems: "center",
    },
    headText: {
        fontSize: "18px",
        marginTop: "15px",
        fontWeight: "bold",
        marginBottom: "15px",
        },

         changeText:{
             fontSize: "18px",
             textTransform: "uppercase",
             marginTop: "10px",
             marginBottom: "10px",
             fontWeight: "bold",
             textAlign: "center",
           },
           cardContainer:{
             width: 370,
             borderRadius: "8px",
             borderColor: "gray",
             borderWidth: 1,
             overflow: "hidden",    
             alignItems: "center",
             margin: "10px",
             
             
           },
           imageChange:{
                 width: 370,
                 height: "250px",
                 resizeMode: "cover",
                 
           }
})
