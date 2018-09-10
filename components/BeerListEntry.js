import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BreweryListEntry extends React.Component {
  render() {
    return (
        <View style={{padding: 20, height:100, backgroundColor:'white', 
          borderBottomColor: 'silver', borderBottomWidth: 1, borderBottomStartRadius: 80,
          flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>

            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}> 
                <View style={{height: 60, width: 60, justifyContent: "space-between", 
              		borderColor: "black", borderWidth: 1 }}>
            	</View>
            	<View style={{paddingLeft: 20}}>
	                <Text style={{textAlign: 'left', fontSize: 16}}>
	                    {this.props.needBreweryName === true && this.props.item.breweryName}
	                </Text>
	                <Text style={{textAlign: 'left', fontSize: 20}}>
	                    {this.props.item.name}
	                </Text>
	                <Text style={{textAlign: 'left', fontSize: 20}}>
	                    {this.props.item.type}
	                </Text>
	            </View>
            </View>
            <View style={{height: 80, width: 80, justifyContent: "space-between"}}>
                <Text style={{textAlign: 'center', fontSize: 16}}>
                        {this.props.item.abv}% ABV
                </Text>
                <Text style={{textAlign: 'center', fontSize: 16}}>
                        {this.props.item.ibu} IBU
                </Text>
                <Text style={{textAlign: 'center', fontSize: 16}}>
                        {this.props.item.rating} / 10
                </Text>
            </View>
        </View>
    );
  }
}