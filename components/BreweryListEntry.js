import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BreweryListEntry extends React.Component {
  render() {
    return (
        <View style={{margin: 5, marginLeft: 10, marginRight: 10, padding: 10, height:100,
            backgroundColor:'red', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{borderColor: 'black', borderWidth: 1, height: 60, width: 40}}>
                <View style={{backgroundColor: 'green',
                    height: 40, width: 40}}>
                    <Text style={{textAlign: 'center', fontSize: 10}}>
                        Location
                    </Text>
                    <Text style={{textAlign: 'center', fontSize: 10}}>
                        Icon
                    </Text>
                </View>
                <Text style={{textAlign: 'center', fontSize: 12}}>
                        City
                </Text>
            </View>
            <Text style={{textAlign: 'center', fontSize: 26}}>
                BreweryName
            </Text>
            <View style={{backgroundColor: 'blue', height: 40, width: 40}}>
                <Text style={{textAlign: 'center', fontSize: 8}}>
                    Restaurant
                </Text>
                <Text style={{textAlign: 'center', fontSize: 8}}>
                    Symbol
                </Text>
            </View>
        </View>
    );
  }
}