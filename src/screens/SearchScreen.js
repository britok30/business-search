import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    return (
        <View style={styles.container}>
            <SearchBar
                term={searchTerm}
                onTermChange={(newTerm) => setSearchTerm(newTerm)}
                onTermSubmit={() => {
                    console.log('term was submitted');
                }}
            />
            <Text style={styles.textStyle}>
                We have found {results.length} results.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: '100%',
    },
    textStyle: {
        color: '#fff',
        marginTop: 10,
        fontSize: 16,
    },
});

export default SearchScreen;
