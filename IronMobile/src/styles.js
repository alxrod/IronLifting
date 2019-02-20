import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: 'red',
  },

  curWOCont: {
  	flex: 1,
  	marginLeft: 10,
  	marginRight: 10,
  	backgroundColor: 'blue',
  	marginBottom: 30,
  	borderRadius: 10,

  },

  wOEnterCont: {
  	flex: 1,
  	marginLeft: 10,
  	marginRight: 10,
  	backgroundColor: 'green',
  	borderRadius: 10,
  },

  contHeader: {
  	paddingLeft: 10,
  	paddingTop: 10,
  	fontSize: 25,
  	color: 'white',


  },

  contHeaderWrap: {
  	borderBottomWidth: 1,
  	borderColor: "yellow",

  },

  textInp: {

  },

  item: {
    padding: 10,
    marginRight: 20,
    fontSize: 18,
    color: 'white',
    height: 44,
    borderColor: 'white',
    borderWidth: 1,
  },

  listCont: {
   flex: 1,
   paddingLeft: 22,
   marginBottom: 10,
   marginTop: 10,
   backgroundColor: 'purple'
  }


});

module.exports = styles;