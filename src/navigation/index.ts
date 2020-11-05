import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../pages/Home';
import DetailsScreen from '../pages/Details';

const AppNavigation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Nodis',
        headerTitleAlign: 'center',
      },
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        title: 'Details',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default AppNavigation;
