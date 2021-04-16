import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
        width: '100%',
        padding: 10,
    },
    button: {
         
        height: 40, 
        borderRadius: 20, //rounds a rectangle button
        justifyContent: 'center', //align text to center (vertically)
        alignItems: 'center', //align horizontally in the cecnter
    },
    text: {
        fontSize: 12, 
        fontWeight: 'bold', //can also use integers
        textTransform: 'uppercase', //makes text upperase
    }
});

export default styles; 
