import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../../assets/home.jpg')}
            style={styles.image}
        >
            <View style={styles.container}>
                <Text style={styles.homeTitle}>Findbooks</Text>
                <Text style={styles.detailTitle}>
                    Find local businesses near you
                </Text>
                <Button
                    title="Go to Search"
                    onPress={() => {
                        navigation.navigate('Search');
                    }}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,.5)',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    homeTitle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 50,

        letterSpacing: 5,
    },
    detailTitle: {
        color: '#fff',
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 14,
    },
});

export default HomeScreen;
