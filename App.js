import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SearchScreen from './src/screens/SearchScreen';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                headerShown: false,
            },
        },
        Search: {
            screen: SearchScreen,
            navigationOptions: {
                title: 'Search',
                headerTitleStyle: {
                    color: '#fff',
                },
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTintColor: '#fff',
            },
        },
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(navigator);
