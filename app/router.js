import {StackNavigator} from 'react-navigation';
import day1 from './view/day1';
import day2 from './view/day2';
export const day1 = StackNavigator({
  day1:{
    screen:day1,
    navigationOptions:{
      title:"Day 1"
    }
  },
  day2:{
    screen: day2,
    navigationOptions:{
      title:"Day 2"
    }
  }
});
