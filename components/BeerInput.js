import React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import { Input, CheckBox, Picker } from 'native-base';
import axios from 'axios';

var url = 'http://ec2-35-183-0-240.ca-central-1.compute.amazonaws.com:3000/';
export default class BeerInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      breweries: [],
      beerName: "Dubbel Vision",
      breweryId: null,
      type: 'Dubbel',
      abv: 5.0,
      ibu: 10,
      rating: 0,
    }
  }

  componentDidMount() {
    fetch(url + 'breweries')
    .then((res) => res.json())
    .then((res) => {
      this.setState({ breweries: res }, () => {
        let firstID = this.state.breweries[0].id;
        fetch(url + 'beers/brewery/'+firstID)
        .then((res) => res.json())
        .then((res) => {
          this.setState({ beers: res, breweryId: firstID});
        })
        .catch((error) => {
          Alert.alert('Yikes');
        });
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }
  submitBeer() {
    fetch(url+'beers', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.beerName,
        breweryId: this.state.breweryId,
        type: this.state.type,
        abv: this.state.abv,
        ibu: this.state.ibu,
        rating: this.state.rating,
      })
    })
    .then((res) => res.json())
    .then((res) => Alert.alert(
      'Success',
      'Beer Submitted.',
      [
        {text: 'OK', onPress: () => {}},
      ],
      { cancelable: true })
    )
    .catch((error) =>  Alert.alert(
      'Failure',
      JSON.stringify(error),
      [
        {text: 'OK', onPress: () => {}},
      ],
      { cancelable: true })
    );
  }
  verifyDuplicate() {
    let duplicate = false;
    this.state.beers.forEach((beer, i, a) => {
      let first = beer.name.split(" ")[0];
      if (this.state.beerName.includes(first) || first.includes(this.state.beerName)) {
        duplicate=true;
      }
    });
    if (!duplicate) {
      this.submitBeer();
    } else {
      Alert.alert(
        'Duplicate detected',
        'Did we submit this one already?',
        [
          {text: 'OK', onPress: () => {}},
          {text: 'Submit Anyway', onPress: () => this.submitBeer()},
        ],
        { cancelable: true });
    }
  }

  changeBrewery(val) {
    this.setState({ breweryId: val });
    fetch(url + 'beers/brewery/'+val)
    .then((res) => res.json())
    .then((res) => this.setState({ beers: res }))
    .catch((error) => {
      Alert.alert(JSON.stringify(error));
    });
  }

	render() {
    return (
      <View style={{ padding: 5 }}>
        <Text>Beer Name</Text>
        <Input
          style={{ borderColor: "black", borderWidth: 1, }}
          onChangeText={(e) => this.setState({ beerName: e })}
          value={this.state.beerName}
        />
        <Text>Brewery</Text>
        <Picker
          mode="dropdown"
          style={{ flex: 1 }}
          selectedValue={this.state.breweryId}
          onValueChange={(val) => this.changeBrewery(val)}
        >
          {this.state.breweries.map((item) => (<Picker.Item key={item.id} label={item.name} value={item.id}/>)) }
        </Picker>
        <Text>Type</Text>
        <Input
          style={{ borderColor: "black", borderWidth: 1, }}
          onChangeText={(e) => this.setState({ type: e })}
          value={this.state.type}
        />
        <Text>ABV</Text>
        <Input
          style={{ borderColor: "black", borderWidth: 1, }}
          onChangeText={(e) => this.setState({ abv: e })}
          value={this.state.abv.toString()}
        />
        <Text>IBU</Text>
        <Input
          style={{ borderColor: "black", borderWidth: 1, }}
          onChangeText={(e) => this.setState({ ibu: e })}
          value={this.state.ibu.toString()}
        />
        <Text>Rating</Text>
        <Input
          style={{ borderColor: "black", borderWidth: 1, }}
          onChangeText={(e) => this.setState({ rating: e })}
          value={this.state.rating.toString()}
          type="number"
        />
        <Button
          title="Submit beer"
          onPress={() => this.verifyDuplicate()}
        />
      </View>
    );
	}
}