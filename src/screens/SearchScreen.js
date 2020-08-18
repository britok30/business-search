import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return (
        <View style={styles.container}>
            <SearchBar
                term={searchTerm}
                onTermChange={setSearchTerm}
                onTermSubmit={searchApi}
            />
            {errorMessage ? (
                <Text style={styles.errorStyle}>{errorMessage}</Text>
            ) : null}
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
    errorStyle: {
        color: '#fff',
        marginTop: 10,
        fontSize: 20,
        textAlign: 'center',
    },
});

export default SearchScreen;
