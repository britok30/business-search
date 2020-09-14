import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsList = ({ header }) => {
    return (
        <View>
            <Text style={styles.textStyles}>{header}</Text>
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
});
export default ResultsList;
