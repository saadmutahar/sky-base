import {StatusBar} from 'react-native';
import  {StackNavigator} from 'react-navigation';

import Home from '../Screens/Home';


const HomeStack = StackNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            header: () => null,

        },
    },
   


}, {
headerMode: 'screen'

});



export default StackNavigator({
    Home: {
        screen:HomeStack,

    },
   
},{


mode:'modal',
cardStyle:{paddingTop: StatusBar.currentHeight},
headerMode:'none',


});