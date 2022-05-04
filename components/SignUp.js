import React,{useState} from 'react';
import { View, Text,StyleSheet,Image, TextInput,TouchableOpacity } from 'react-native';
import img from "./images/sign.png"

const SignUp = ({navigation}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <View style={styles.container}>
      <Image style={styles.headerImage}
      source={img}/>
        <View>
        <TextInput
        style={styles.inputText}
        placeholder="Enter Fullname"
        value={name}
        onChangeText={setName}
        />
        <TextInput
        style={styles.inputText}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        />
        <TextInput
        style={styles.inputText}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        />
        </View>     
        <TouchableOpacity
        style={styles.buttonChange}
        onPress={()=>{
          navigation.navigate("view")
        }}>
        <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  buttonText:{
    color: "white",
    fontSize: "18px",
    letterSpacing: "0.2px",
  },
  buttonChange:{
      width: "200px",
      backgroundColor: "#ff6363",
      height: "40px",
      alignItems: "center",
      justifyContent: "center",
     marginTop: "20px",
     borderRadius: "4px",
      
  },
    container:{
        flex: "1",
        backgroundColor: "#eee",
        alignItems: "center",
    },
    headerImage:{
        width: "400px",
        height: "330px",
        resizeMode: "cover",
        marginBottom: "20px",
    },
    inputText:{
      width: "300px",
      height: "35px",
      borderColor:"gray",
      borderWidth: 1,
      margin: "10px",
      padding: "10px",
      
    }
})
