import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return (
        <View style={styles.container}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? (
                <Text style={styles.textStyle}>{errorMessage}</Text>
            ) : null}
            <Text style={styles.textStyle}>
                We have found {results.length} results
            </Text>
            <ResultsList header="Cost Effective" />
            <ResultsList header="Bit Pricier" />
            <ResultsList header="Big Spender" />
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
