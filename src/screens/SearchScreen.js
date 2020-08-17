import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    return (
        <View style={styles.container}>
            <SearchBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: '100%',
    },
});

export default SearchScreen;
