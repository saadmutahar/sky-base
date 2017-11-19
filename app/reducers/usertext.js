import {CHANGE_TEXT, CONVERSION } from '../actions/usertext';

const initialState = {
  
  userText: '...',
  displayText: '...',
  
};




export default (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_TEXT:

        return { ...state, userText: action.userText || 0  };

        case CONVERSION: 
        return {

          ...state,

         // userText: action.result.userText,
          displayText: action.result,
          
        };
        
       
      default:
        return state;
    }
  };