import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView from 'react-native-maps';

export default class BreweryMap extends React.Component {
    render() {
        return (
            <MapView 
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                style={{...StyleSheet.absoluteFillObject}}
            />
        );
    }
}