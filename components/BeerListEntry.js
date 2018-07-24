import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BreweryListEntry extends React.Component {
  render() {
    return (
    	<View>
	        <View style={{margin: 5, marginLeft: 10, marginRight: 10, padding: 10, height:100,
	            backgroundColor:'red', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
	            <View>
	                <Text style={{textAlign: 'left', fontSize: 16}}>
	                    BreweryName
	                </Text>
	                <Text style={{textAlign: 'left', fontSize: 20}}>
	                    BeerName
	                </Text>
	                <Text style={{textAlign: 'left', fontSize: 20}}>
	                    BeerType
	                </Text>
	                <View style={{backgroundColor: 'blue', height: 20, width: 280}}>
	                    <Text style={{textAlign: 'center', fontSize: 8}}>
	                        Stars
	                    </Text>
	                </View>
	            </View>
	            <View style={{borderColor: 'black', borderWidth: 1, height: 80, width: 80,
	                justifyContent: "space-between"}}>
	                <Text style={{textAlign: 'center', fontSize: 16}}>
	                        #.#% ABV
	                </Text>
	                <Text style={{textAlign: 'center', fontSize: 16}}>
	                        ## IBU
	                </Text>
	                <Text style={{textAlign: 'center', fontSize: 16}}>
	                        #.# / 10
	                </Text>
	            </View>
	        </View>
	        <View style={{margin: 5, marginLeft: 10, marginRight: 10, padding: 10, height:100,
	            backgroundColor:'red', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
	            <View>
	                <Text style={{textAlign: 'left', fontSize: 20}}>
	                    BeerName
	                </Text>
	                <Text style={{textAlign: 'left', fontSize: 20}}>
	                    BeerType
	                </Text>
	                <View style={{backgroundColor: 'blue', height: 20, width: 280}}>
	                    <Text style={{textAlign: 'center', fontSize: 8}}>
	                        Stars
	                    </Text>
	                </View>
	            </View>
	            <View style={{borderColor: 'black', borderWidth: 1, height: 80, width: 80,
	                justifyContent: "space-between"}}>
	                <Text style={{textAlign: 'center', fontSize: 16}}>
	                        #.#% ABV
	                </Text>
	                <Text style={{textAlign: 'center', fontSize: 16}}>
	                        ## IBU
	                </Text>
	                <Text style={{textAlign: 'center', fontSize: 16}}>
	                        #.# / 10
	                </Text>
	            </View>
	        </View>
        </View>
    );
  }
}