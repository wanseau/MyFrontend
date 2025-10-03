import {View, Text, Button} from 'react-native';
import axios from 'axios';

import styles from '../styles';

export default function ReviewPage({route, navigation}) {

    const {formData} = route.params;

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/registration/api/register/', formData);  
            Alert.alert("Success", "Registration Successful");
            navigation.getBack();
        } catch (error) {
            Alert.alert("Error", JSON.stringify(error.response?.data || "Something went wrong"));
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.header}>Review Information</Text>

                <Text style={styles.text}>First Name: {formData.first_name}</Text>
                <Text style={styles.text}>Last Name: {formData.last_name}</Text>
                <Text style={styles.text}>Email: {formData.email}</Text>
                <Text style={styles.text}>Password: {formData.password}</Text>
                <Text style={styles.text}>Gender: {formData.gender}</Text>
                
                <Button style={styles.button} title='Go back to edit' onPress={() => navigation.goBack()}/>
                <Button style={styles.button} title='Submit' onPress={handleSubmit}/>
            </View>
        </View>

    )
}