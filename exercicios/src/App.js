
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Routes from './Routes'


export default class App extends Component {
  render() {
    return (
      <Routes></Routes>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
})