import React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import { Input, CheckBox } from 'native-base';
import axios from 'axios';

export default class BreweryInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      breweries: [],
      breweryName: "Innocente",
      breweryCity: "Waterloo",
      visited: false,
      isRestaurant: false,
    }
  }

  componentDidMount() {
    fetch(url + 'breweries')
    .then((res) => res.json())
    .then((res) => this.setState({ breweries: res }))
    .catch((error) => {
      console.error(error);
    });
  }

  verifyDuplicate() {
    let duplicate = false;
    this.state.breweries.forEach((brewery, i, a) => {
      let first = brewery.name.split(" ")[0];
      if (this.state.breweryName.includes(first) || first.includes(this.state.breweryName)) {
        duplicate=true;
      }
    });
    if (!duplicate) {
      this.submitBreweryInfo();
    } else {
      Alert.alert(
        'Duplicate detected',
        'Did we submit this one already?',
        [
          {text: 'OK', onPress: () => {}},
          {text: 'Submit Anyway', onPress: () => this.submitBreweryInfo()},
        ],
        { cancelable: true });
    }
  }

  submitBreweryInfo() {
    let url = 'http://ec2-35-183-0-240.ca-central-1.compute.amazonaws.com:3000/';
    fetch(url + 'breweries', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.breweryName,
        city: this.state.breweryCity,
        visited: this.state.visited ? 1 : 0,
        isRestaurant: this.state.isRestaurant ? 1 : 0,
      })
    })
    .then((res) => res.json())
    .then((res) => Alert.alert(
      'Success',
      'Brewery Submitted.',
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

	render() {
    return (
      <View style={{ padding: 5 }}>
        <Text>Brewery Name</Text>
        <Input
          style={{ borderColor: "black", borderWidth: 1, }}
          onChangeText={(e) => this.setState({ breweryName: e })}
          value={this.state.breweryName}
        />
        <Text>City</Text>
        <Input
          style={{ borderColor: "black", borderWidth: 1, }}
          onChangeText={(e) => this.setState({ breweryCity: e })}
          value={this.state.breweryCity}
        />
        <Text>Have we visited?</Text>
        <CheckBox
          style={{ borderColor: "black", borderWidth: 1, }}
          onPress={() => this.setState({ visited: !this.state.visited })}
          checked={this.state.visited}
        />
        <Text>Is it a restaurant?</Text>
        <CheckBox
          style={{ borderColor: "black", borderWidth: 1, }}
          onPress={() => this.setState({ isRestaurant: !this.state.isRestaurant })}
          checked={this.state.isRestaurant}
        />
        <Button
          title="Submit Brewery"
          onPress={() => this.verifyDuplicate()}
        />
      </View>
    );
	}
}