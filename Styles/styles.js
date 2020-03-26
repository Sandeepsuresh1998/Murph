import {StyleSheet} from 'react-native';

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
    buttonStyle: {
        marginTop: 20,
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
    },
    
});
export default styles;