import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Input, CheckBox, Picker, Button } from 'native-base';
import BreweryListEntry from './../components/BreweryListEntry';

var url = 'http://ec2-35-183-0-240.ca-central-1.compute.amazonaws.com:3000/';
export default class BreweryList extends React.Component {

	state={
		breweries: []
	};

	componentDidMount() {
	    fetch(url + 'breweries')
	    .then((res) => res.json())
	    .then((res) => this.setState({ breweries: res }))
	    .catch((error) => {
	      console.error(error);
	    });
    }

	render() {
		return (
			<View> 
				<FlatList
				  data={this.state.breweries}
				  keyExtractor={item => item.id.toString()}
				  renderItem={({item}) => <BreweryListEntry item={item} breweryPress={this.props.breweryPress}/>}
				/>
			</View>
		);
	}

}