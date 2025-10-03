import React from 'react'
import {View, Text, Button} from 'react-native'

import styles from '../styles';

export default function Homepage ({navigation}) { 
    return (
        <View style={styles.container}>

            <View style={styles.homeCard}>
                <Text style={styles.header}>Homepage</Text>

                <View>
                    <Button 
                    style={styles.button} 
                    title='Register'
                    onPress={() => navigation.navigate('Register')} 
                    
                    />
                </View>
            </View>
        </View>
    ); 
}

