import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    console.log(results);

    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price;
        });
    };

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
            <ResultsList
                results={filterResultsByPrice('$')}
                header="Cost Effective"
            />
            <ResultsList
                results={filterResultsByPrice('$$')}
                header="Bit Pricier"
            />
            <ResultsList
                results={filterResultsByPrice('$$$')}
                header="Big Spender"
            />
            <ResultsList
                results={filterResultsByPrice('$$$$')}
                header="Really Expensive"
            />
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
