import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#ff512f',
    },
    welcome: {
      fontSize: 40,
      fontWeight: "bold",
      color: "black",
      textAlign: 'center',
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    buttonStyle: {
        alignItems: "center", 
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 3, 
        height: 100, 
        width: 100,
        borderRadius: 50,
        backgroundColor: "green"
    },
    buttonText: {
        fontSize: 25,
    }
});
export default styles;