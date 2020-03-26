import {StyleSheet} from 'react-native';
import { Directions } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 70, 
      justifyContent: "flex-start",
      alignItems: 'center',
      backgroundColor: '#ff512f',
    },
    bodyContainer: {
        margin: 35,
        alignItems: "center",
    },
    title: {
      fontSize: 40,
      fontWeight: "bold",
      color: "black",
      textAlign: 'center',
    },
    header: {
        fontSize: 30, 
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    button1: {
        marginTop: 20,
        marginHorizontal: 10, 
        alignItems: "center", 
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 3, 
        height: 90, 
        width: 90,
        borderRadius: 45,
        backgroundColor: "green"
    },
    button2: {
        marginTop: 20,
        marginHorizontal: 10, 
        alignItems: "center", 
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 3, 
        height: 90, 
        width: 90,
        borderRadius: 45,
        backgroundColor: "red"
    },
    buttonContainer: {
        flexDirection: "row",
    },
    buttonText: {
        fontSize: 25,
    },
    
});
export default styles;