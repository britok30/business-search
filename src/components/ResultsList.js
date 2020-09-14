import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsList = ({ header, results }) => {
    return (
        <View>
            <Text style={styles.textStyles}>{header}</Text>
            <Text style={styles.resultStyles}>Results: {results.length}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyles: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    resultStyles: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 20,
    },
});
export default ResultsList;
