import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class BreweryListEntry extends React.Component {

    getBeerColor() {
        return 'gold';
    }
  render() {
    return (
        <View style={{padding: 10, height:100, backgroundColor:'white', 
          borderBottomColor: 'silver', borderBottomWidth: 1,
          flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
            <Image resizeMode='contain' style={{width:70, height:70, marginRight:10, zIndex:1}} source={require('../Beer-Mug.png')}/>
            <View style={{ width:32, height:46, marginBottom:2, backgroundColor: this.getBeerColor(), position:'absolute', left:22, zIndex:0 }} />
            <View>
                <Text style={{textAlign: 'left', fontSize: 16}}>
                    {this.props.item.breweryName}
                </Text>
                <Text style={{textAlign: 'left', fontSize: 20}}>
                    {this.props.item.name}
                </Text>
                <Text style={{textAlign: 'left', fontSize: 20}}>
                    {this.props.item.type}
                </Text>
            </View>
            <View style={{height: 80, width: 80, justifyContent: "space-between", alignItems:'flex-end', position: 'absolute', right: 10}}>
                <Text style={{fontSize: 16}}>
                    {this.props.item.abv}% ABV
                </Text>
                <Text style={{fontSize: 16}}>
                    {this.props.item.ibu} IBU
                </Text>
                <Text style={{fontSize: 16}}>
                    {this.props.item.rating} / 10
                </Text>
            </View>
        </View>
    );
  }
}