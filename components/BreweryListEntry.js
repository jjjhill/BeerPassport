import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class BreweryListEntry extends React.Component {
  render() {
    return (
        <TouchableOpacity onPress={() => this.props.breweryPress(this.props.item)} style={{padding: 20, height:100, backgroundColor:'white', 
          borderBottomColor: 'silver', borderBottomWidth: 1, borderBottomStartRadius: 80,
          flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
            <View>
                <Text style={{color:'black', fontSize: 20}}>
                    {this.props.item.name}
                </Text>
                <Text style={{color:'black', fontSize: 16}}>
                    {this.props.item.city}
                </Text>
            </View>
        </TouchableOpacity>
    );
  }
}