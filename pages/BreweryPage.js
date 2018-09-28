import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Input, CheckBox, Picker, Button} from 'native-base';
import BeerListEntry from '../components/BeerListEntry';
import BeerList from '../pages/BeerList';

var url = 'http://ec2-35-183-0-240.ca-central-1.compute.amazonaws.com:3000/';
export default class BreweryPage extends React.Component {

    render() {
		return (
			<BeerList breweryId={this.props.breweryId}/>
		);
	}

}