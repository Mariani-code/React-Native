import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
      },
    
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center', 
      },
    
      title: {
        fontSize: 40, 
        fontWeight: '600',
    
      },
      subtitleCTA: {
        textDecorationLine: 'underline', //For underlining
      },
      subtitle: {
        fontSize: 16, 
        color: '#5c5e62'
      },
      
      image: {
        width: '100%', 
        height: '100%',
        resizeMode: 'contain', //contain will have white space but cover will stretch it to fit the whole screen 
        position: 'absolute', //shows the model s and starting at text 
      },

      buttonContainer: {
        position: 'absolute', 
        bottom: 50,
        width: '100%',
    }

});

export default styles;
