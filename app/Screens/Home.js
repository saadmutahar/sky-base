import PropTypes from 'prop-types';
import React, { Component } from 'react';
import StarRating from 'react-native-star-rating';


import {changeText} from '../actions/usertext';
import {connect} from 'react-redux';
import  store from '../config/store';
import {Provider} from 'react-redux';



import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    Image,
    View
  } from 'react-native';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
         dispatch: PropTypes.func,
         userText: PropTypes.string,
         conversionDisplay: PropTypes.string,
        };
      }

     
     
    
      handleTextInput = (userText) => {
          this.props.dispatch(changeText(userText));
          console.log("STATE HANDLE", this.props.userText);
     

      };
    render() {
        let display = this.props.conversionDisplay;
   
        return (
        <View style= {styles.container}>  
          

                        <TextInput
                            style={styles.textInput}
                            onChangeText= {this.handleTextInput}
                            placeholder= "Enter your name"
                            />

                            <Text >  Your name is  </Text>
                            <Text> {display} </Text>

        </View>
          
        );
      }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F5FCFF',
    },
    textInput: {
        height: 40,
        borderColor:'gray',
        borderWidth:1,

    },
   
  });


  const mapStateToProps = (state) => {
    
        
            const userText = state.usertext.userText;
            const output = state.usertext.displayText;
           
            return {
    
                userText,
                conversionDisplay: output,
               
               
    
        };
    
    };

export default  connect(mapStateToProps)(Home);


