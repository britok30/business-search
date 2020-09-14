import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);

        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image
                            source={{ uri: item }}
                            style={styles.imageStyles}
                        />
                    );
                }}
            />
            <Text>{result.phone}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyles: {
        width: 250,
        borderRadius: 5,
        height: 120,
        marginRight: 20,
        marginBottom: 10,
    },
});

export default ResultShowScreen;
