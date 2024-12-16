import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const handleInputChange = (text: string) => {
        onSearch(text); // Trigger the search function
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search by name..."
                onChangeText={handleInputChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#fff',
    },
});
