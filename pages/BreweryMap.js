import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { MapView } from 'expo';

export default class BreweryMap extends React.Component {

    render() {
        return (
            <MapView
              style={{ flex: 1 }}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
        );
    }
}