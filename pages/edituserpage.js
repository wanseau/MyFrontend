import { View, Text, TextInput, Button, ScrollView, Alert } from 'react-native';
import { useState } from 'react';
import styles from '../styles';
import axios from 'axios';

export default function EditUserPage({ route, navigation }) {
    const { user } = route.params;

    const [firstname, setFirstName] = useState(user.first_name);
    const [lastname, setLastName] = useState(user.last_name);
    const [user_email, setUserEmail] = useState(user.email);
    const [user_gender, setUserGender] = useState(user.gender);
    const [user_password, setUserPassword] = useState(user.password);

    const handleUpdate = () => {
        if (!firstname || !lastname || !user_email || !user_gender || !user_password) {
            Alert.alert("Error", "Please fill up all required fields");
            return;
        }

        axios
            .put(`http://127.0.0.1:8000/registration/api/users/${user.id}/`, {
                first_name: firstname,
                last_name: lastname,
                email: user_email,
                gender: user_gender,
                password: user_password,
            })
            .then(() => {
                Alert.alert("Success", "User updated successfully!");
                navigation.goBack();
            })
            .catch((error) => {
                console.error("Update failed:", error);
                Alert.alert("Error", "Failed to update user. Please try again.");
            });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Edit User</Text>

            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstname}
                onChangeText={setFirstName}
            />

            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastname}
                onChangeText={setLastName}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={user_email}
                onChangeText={setUserEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Gender"
                value={user_gender}
                onChangeText={setUserGender}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={user_password}
                onChangeText={setUserPassword}
            />

            <View style={styles.buttonContainer}>
                <Button
                    title="Update Record"
                    onPress={handleUpdate}
                    color="#da6d42"
                />
            </View>
        </ScrollView>
    );
}