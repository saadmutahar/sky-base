import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Provider} from 'react-redux';

import Navigator from './config/routes';
//import {AlertProvider} from './Component/Alert';
import  store from './config/store';

 
EStyleSheet.build(
    {
        $primaryBlue: '#4F6D7A',
        $primaryOrange: '#D57A66',
        $primaryGreen: '#00BD9D',
        $primaryPurple: '#9E768F',


        $white: '#FFFFFF',
        //outline:1,
        $border:'#E2E2E2',
        $inputText: '#797979',
        $lightGray: '#F0F0F0',
        $darkText: '#343434',
        
    }
);

export default () => (
      <Provider store={store}>
          <Navigator onNavigationStateChange={null} />
      </Provider>
    );