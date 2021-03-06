import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../../assets/home.jpg')}
            style={styles.image}
        >
            <View style={styles.container}>
                <Text style={styles.homeTitle}>
                    <FontAwesome name="foursquare" style={styles.iconStyle} />
                </Text>
                <Text style={styles.detailTitle}>
                    Find local food businesses near you
                </Text>
                <Button
                    title="Search"
                    color="#fff"
                    style={styles.buttonStyle}
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
        backgroundColor: 'rgba(0,0,0,.4)',
        justifyContent: 'center',
    },
    iconStyle: {
        fontSize: 100,
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
