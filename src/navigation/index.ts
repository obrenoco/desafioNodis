import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../pages/Home';
import DetailsScreen from '../pages/Details';

const Routes = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {title: 'Home'},
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: {title: 'Details'},
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default Routes;
