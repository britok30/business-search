import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SearchScreen from './src/screens/SearchScreen';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                header: null,
            },
        },
        Search: {
            screen: SearchScreen,
            navigationOptions: {
                title: 'Search',
                headerStyle: {
                    backgroundColor: '#000',
                },
            },
        },
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(navigator);
