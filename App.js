import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BreweryListEntry from './components/BreweryListEntry';
import BeerListEntry from './components/BeerListEntry';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <BreweryListEntry/>
            <BeerListEntry/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
});
