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


/*        <View style={{margin: 5, marginLeft: 10, marginRight: 10, padding: 10, height:100,
            backgroundColor:'lightgoldenrodyellow', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{height: 60, width: 40}}>
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
                    {this.props.item.city}
                </Text>
            </View>
            <Text style={{textAlign: 'center', fontSize: 26}}>
                {this.props.item.name}
            </Text>
            <View/>
            <View style={{backgroundColor: 'blue', height: 40, width: 40}}>
                <Text style={{textAlign: 'center', fontSize: 8}}>
                    Restaurant
                </Text>
                <Text style={{textAlign: 'center', fontSize: 8}}>
                    Symbol
                </Text>
            </View>
        </View>
*/
    );
  }
}