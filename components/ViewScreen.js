import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import img from "./images/sign.png"
import data from "./data.json"


export default function ViewScreen({navigation}) {
  return (
    <ScrollView>
    <View style={styles.container}>
    
   {data.map((props)=>(
    <View style={styles.cardContainer} key={props.id}>
    <Image style={styles.imageChange}
    //  source={img}
    source={require(`../assets/${props.img}`)}
    />
    <Text style={styles.changeText}>{props.title}</Text>
    <TouchableOpacity 
    style={styles.readMore}
    onPress={()=>{
      console.log(props.id)
        navigation.navigate("detail", props={props})
        
    }}
    >
    <Text style={styles.readText} >Read More</Text>
    </TouchableOpacity>
    </View>
   ))}
  
    </View>
     </ScrollView>
  )
}

const styles = StyleSheet.create({
    readText:{
       color: "white",
      },
    readMore:{
        width: "200px",
        borderRadius: "3px",
        height: "30px",
        backgroundColor: "#ff6363",
        alignItems: "center",
        justifyContent: "center",
      },
    changeText:{
        fontSize: "17px",
        textTransform: "uppercase",
        marginTop: "10px",
        marginBottom: "10px",
        fontWeight: "bold",
        textAlign: "center",
      },
    container:{
        flex: "1",
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center",
      },
      cardContainer:{
        width: "260px",
        borderRadius: "8px",
        minHeight: "250px",
        height: 290,
        borderColor: "gray",
        borderWidth: 1,
        overflow: "hidden",    
        alignItems: "center",
        margin: "10px",
        
      },
      imageChange:{
            width: 300,
            height: "170px",
            resizeMode: "cover",
            
      }
})