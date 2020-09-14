import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.container}>
            <View style={styles.backgroundStyle}>
                <Feather name="search" style={styles.iconStyle} />
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardAppearance="dark"
                    placeholder="Search"
                    placeholderTextColor="#fff"
                    style={styles.inputStyles}
                    value={term}
                    onChangeText={onTermChange}
                    onEndEditing={onTermSubmit}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    backgroundStyle: {
        backgroundColor: '#181818',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10,
    },
    inputStyles: {
        flex: 1,
        fontSize: 18,
        color: '#fff',
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 5,
        color: '#fff',
    },
});

export default SearchBar;
