import React , {useEffect,useState} from 'react';
import { Text, View, StyleSheet } from "react-native";




export default function App() {

  const [currentDTE,setCurrentDTM] = useState(new Date());
  const name = "jevs tv"

  useEffect(() => {
    const Timer = setInterval (() =>{
      setCurrentDTM(new Date());
    },1000);
    return () => clearInterval(Timer);
  },[])
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Text>This is my first React Native app on Snack!</Text>
      <Text style={styles.editor}> My name is {name} </Text>
      <Text style={styles.Timer}>Time and Date</Text>
      <Text> {currentDTE.toLocaleDateString()} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,              // takes up the full screen
    fontSize: 32,
    justifyContent: "center",  // vertically center
    alignItems: "center",      // horizontally center
    backgroundColor: "#33FFFC" // a light background
  },
  title: {
    fontSize: 120,
    fontWeight: "bold",
    marginBottom: 10
  },
  editor:{
    fontSize: 20,
    fontWeight: "bold",
  },
  Timer:{
    fontWeight: "bold",
    fontSize: 16,
  }
}
);
