import {View, Text, FlatList, Alert} from "react-native";
import axios from "axios";
import {useState, useEffect} from "react";
import styles from '../styles';
import { Button } from "react-native-web";

export default function UserListPage({navigation}){
    const[users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://192.168.20.236:8000/registration/api/users/")
        .then((res) => {
            setUsers(res.data)
        })
        .catch((err) => {
            console.error(err);
        })
    },[]
    );
    const handleEdit = (user) => {
        navigation.navigate('EditUser', {user});
    }

    const handleDelete = (id) => {
        Alert.alert(
            "Confirm Delete",
            "Are you sure you want to delete?",
            (
                {text: "Cancel", style: "cancel"},
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        axios.delete(`http://192.168.20.236:8000/registration/api/users/${id}/`)
                        .then(() => {
                            Alert.alert("Success", "User deleted successfully");
                        
                        })
                        .catch((err) => {
                            console.error(err);
                            Alert.alert("Error", "Failed to delete user");
                        });
                    }
                }
            )
        );
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Registered Users</Text>
            <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item})=> (
                <View style={styles.card}>
                    <Text>Firstname: {item.first_name}</Text>    
                    <Text>Lastname: {item.last_name}</Text>     
                    <Text>Email: {item.email}</Text>
                    <View>
                        <Button title="Edit"
                        color="#da6d42"
                        onPress={() => handleEdit(item)}/>
                        <Button title="Delete"
                        color="#84240c"
                        onPress={() => handleDelete(item.id)}/>
                    </View>
                </View>       
            )}/>
        </View>
    )
}
