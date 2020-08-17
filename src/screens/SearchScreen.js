import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <View style={styles.container}>
            <SearchBar
                term={searchTerm}
                onTermChange={(newTerm) => setSearchTerm(newTerm)}
                onTermSubmit={() => {
                    console.log('term was submitted');
                }}
            />
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
