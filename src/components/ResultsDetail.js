import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imageStyles}
                source={{ uri: result.image_url }}
            />
            <Text style={styles.nameStyles}>{result.name}</Text>
            <Text style={styles.resultStyles}>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
            <Text style={styles.resultStyles}>
                Location: {result.location.city}, {result.location.state}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    nameStyles: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    resultStyles: {
        color: '#fff',
    },
    imageStyles: {
        width: 250,
        borderRadius: 5,
        height: 120,
        marginRight: 20,
        marginBottom: 10,
    },
});

export default ResultsDetail;
