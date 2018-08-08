import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Input, CheckBox, Picker } from 'native-base';
import axios from 'axios';

var url = 'http://ec2-35-182-236-215.ca-central-1.compute.amazonaws.com:3000/';
export default class beerInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      breweries: [],
      beerName: "Dubbel Vision",
      breweryId: 0,
      type: 'Dubbel',
      abv: 5.0,
      ibu: 10,
      rating: 0,
    }
  }

  componentWillMount() {
    fetch(url + 'breweries')
    .then((res) => res.json())
    .then((res) => this.setState({ breweries: res }))
    .catch((error) => {
      console.error(error);
    });
  }

  submitBeerInfo() {
    fetch(url+'beers', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.beerName,
        brewery: this.state.breweryId,
        type: this.state.type,
        abv: this.state.abv,
        ibu: this.state.ibu,
        rating: this.state.rating,
      })
    })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => {
      console.error(error);
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
          onValueChange={(val) => this.setState({ breweryId: val })}
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
          onPress={() => this.submitBeerInfo()}
        />
      </View>
    );
	}
}