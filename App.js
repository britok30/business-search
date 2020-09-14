import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SearchScreen from './src/screens/SearchScreen';
import HomeScreen from './src/screens/HomeScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

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
                    backgroundColor: '#1a1a2e',
                },
                headerTintColor: '#fff',
            },
        },
        ResultsShow: {
            screen: ResultsShowScreen,
        },
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(navigator);
