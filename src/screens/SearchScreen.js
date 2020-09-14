import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

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
            <ScrollView>
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
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1a1a2e ',
        height: '100%',
        flex: 1,
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
