import { takeEvery, select , put} from 'redux-saga/effects';
import { Platform, StyleSheet } from 'react-native';
import React, {Component} from "react";


import {CHANGE_TEXT, CONVERSION} from '../actions/usertext';



const fetchLatestConversionRates = function* (action) {
    console.log('TODO: Update the things', action);

  let userText = action.userText;
    if(userText === undefined) {

      userText =  yield select  (state => state.usertext.userText);
    }
  
    
   

   var er= /e/g;
   let fool = userText.replace(er, 'k');

   const result =  fool;
   
    yield put({ type:CONVERSION, result });
    
   
    console.log('Foo', fool);

    yield;
  };
  
  const rootSaga = function* () {
    yield takeEvery(CHANGE_TEXT, fetchLatestConversionRates);
  };
  export default rootSaga;