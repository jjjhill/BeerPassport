import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Input, CheckBox, Picker, Button} from 'native-base';
import BeerListEntry from './../components/BeerListEntry';

var url = 'http://ec2-35-183-0-240.ca-central-1.compute.amazonaws.com:3000/';
export default class BeerList extends React.Component {

	state={
		allBeers: [],
		beers: []
	};


	componentDidMount() {
		if (this.props.breweryId === 'all') {
			fetch(url + 'beers')
		    .then((res) => res.json())
		    .then((res) => this.setState({ allBeers: res, beers: res }))
		    .catch((error) => {
		      console.error(error);
		    });
		} else {
			console.log(this.props.breweryId);
			fetch(url + 'beers/brewery/' + this.props.breweryId)
		    .then((res) => res.json())
		    .then((res) => this.setState({ beers: res }))
		    .catch((error) => {
		      console.error(error);
			});
	    }
    }

    static getDerivedStateFromProps(props, state) {
    	return { beers: state.allBeers.filter(function(beer) {
				return beer.name.toLowerCase().indexOf(props.query.toLowerCase()) > -1
		 	})
    	};
    }

    render() {
		return (
			<View>
				<FlatList
				  keyboardShouldPersistTaps={'always'}
				  keyboardDismissMode={'on-drag'}
				  data={this.state.beers}
				  keyExtractor={item => item.id.toString()}
				  renderItem={({item}) => <BeerListEntry item={item} 
				  	 needBreweryName={this.props.breweryId === 'all' ? true : false}/>}
				/>
			</View>
		);
	}

}