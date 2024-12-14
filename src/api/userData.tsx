import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../components/card';
import Loader from '../components/loader';

export interface UserDataProps {
    id: number;
    name: string;
    email: string;
}

const UserData = () => {
    const [users, setUsers] = useState<UserDataProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setUsers(data);
            })
            .catch(fetchError => {
                setError(fetchError.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>Error: {error}</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            <Text style={styles.title}>User’s name & email.</Text>
            {users.map(user => (
                <Card key={user.id} name={user.name} email={user.email} id={user.id} />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    error: {
        color: 'red',
        fontSize: 18,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default UserData;
