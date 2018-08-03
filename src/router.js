import { createStackNavigator } from 'react-navigation';
import MainScreen from './components/MainScreen';
import FirstScreen from './components/FirstScreen';
  
const MainStackNavigator = createStackNavigator({
  First: FirstScreen,
  Main: MainScreen,
}, {
  navigationOptions: {
    header: null
  },
});

export default MainStackNavigator;
