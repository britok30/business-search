import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ header, results }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerStyles}>{header}</Text>
            <Text style={styles.resultStyles}>Results: {results.length}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <ResultsDetail result={item} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyles: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    resultStyles: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 20,
        marginLeft: 15,
    },
    container: {
        marginBottom: 10,
    },
});
export default ResultsList;
