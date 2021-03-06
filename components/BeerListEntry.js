import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Slider } from 'react-native';
import { srmToRGB } from '../helpers';

var url = 'http://ec2-35-183-0-240.ca-central-1.compute.amazonaws.com:3000/';
export default class BreweryListEntry extends React.Component {
    state = {
        showSlider: false,
        sliderValue: this.props.item.srm,
    }

    toggleSlider = () => this.setState({ showSlider: !this.state.showSlider });

    updateSRM(val) {
        this.setState({ sliderValue: val });
    }

    updateBackend(id, val) {
        fetch(url+'beers', {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            beerId: id,
            srm: val
          })
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((error) =>  Alert.alert(
          'Failure to update SRM',
          JSON.stringify(error),
          [
            {text: 'OK', onPress: () => {}},
          ],
          { cancelable: true })
        );
    }

    render() {
        return (
            <View style={{padding: 10, height:100, backgroundColor:'white', 
              borderBottomColor: 'silver', borderBottomWidth: 1,
              flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <TouchableOpacity style={{width:70, height:70, zIndex:1, marginRight:15}} onPress={() => this.toggleSlider()}>
                    <Image resizeMode='contain' style={{width:70, height:70, zIndex:1}} source={require('../Beer-Mug.png')}/>
                    <View style={{ width:32, height:46, marginBottom:2, backgroundColor: srmToRGB(Math.round(this.state.sliderValue)), position:'absolute', left:12,top:10, zIndex:0 }} />
                </TouchableOpacity>
                { !this.state.showSlider &&
                <View style={{ flex: 1 }}>
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
                </View> }
                {this.state.showSlider &&
                    <View style={{flex:1, alignItems:'center'}}>
                        <Slider
                            style={{ alignSelf:'stretch', height: 30, flex: 1 }}
                            value={this.state.sliderValue}
                            onValueChange={(val) => this.updateSRM(val)}
                            onSlidingComplete={(val) => this.updateBackend(this.props.item.id, val)}
                            minimumValue={1}
                            maximumValue={40}
                        />
                        <View style={{flex:1}}>
                            <Image resizeMode='contain' style={{height: 14}} source={require('../srmcolor.jpg')}/>
                        </View>
                    </View>
                }
            </View>
        );
    }
}
