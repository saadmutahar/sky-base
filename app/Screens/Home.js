import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Header, Content, Badge, Text, Icon } from 'native-base';

import StarRating from 'react-native-star-rating';


import {changeText} from '../actions/usertext';
import {connect} from 'react-redux';
import  store from '../config/store';
import {Provider} from 'react-redux';



import {
    Platform,
    StyleSheet,
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
        // <View style= {styles.container}>  
          
        //                 <TextInput
        //                     style={styles.textInput}
        //                     onChangeText= {this.handleTextInput}
        //                     placeholder= "Enter your name saad "
        //                     />
        //                     <Text >  Your name is  </Text>
        //                     <Text >  My name is saad  </Text>
        //                     <Text> {display} </Text>

        // </View>

<Container>
<Header />
<Content>
  <Badge>
    <Text>2</Text>
  </Badge>
  <Badge primary>
    <Text>2</Text>
  </Badge>
  <Badge success>
    <Text>2</Text>
  </Badge>
  <Badge info>
    <Text>2</Text>
  </Badge>
  <Badge warning>
    <Text>2</Text>
  </Badge>
  <Badge danger>
    <Text>2</Text>
  </Badge>
  <Badge primary>
    <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}/>
  </Badge>
  <Badge style={{ backgroundColor: 'black' }}>
    <Text style={{ color: 'white' }}>1866</Text>
  </Badge>
</Content>
</Container>


          
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


