import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native'; 
import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem';

const CarsList = (props) => {
    
    return ( 
        <View style={styles.container}>
            <FlatList //renders list from cars.js file, needs the data and renderItem attributes
                data={cars}
                renderItem={({item}) => <CarItem car={item}/>}
                showsVerticalScrollIndicator={false}//removes scroll wheel 
                snapToAlignment={'start'} //slide feature
                decelerationRate={'fast'} //rate of sliding animation
                snapToInterval={Dimensions.get('window').height}//adjust dimensions to any screen 
            />
        </View>
    );
};

export default CarsList;
