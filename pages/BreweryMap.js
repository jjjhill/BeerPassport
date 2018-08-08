import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MapView from 'react-native-maps';
import { RNS3 } from 'react-native-aws3';
import ImagePicker from 'react-native-image-crop-picker';

export default class BreweryMap extends React.Component {
    selectPhoto() {
        ImagePicker.openPicker().then(image => {
          console.log(images);
        });
    }

    render() {
        return (
            <Button style={{width: 50, height: 50}} onPress={this.selectPhoto}/>
        );
    }
}