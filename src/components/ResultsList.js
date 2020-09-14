import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';
const ResultsList = ({ header, results, navigation }) => {
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
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ResultsShow')}
                        >
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyles: {
        color: '#fff',
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
export default withNavigation(ResultsList);
