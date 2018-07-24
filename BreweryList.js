import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import Log from '../components/log';

export default class BreweryList extends Component {
  state = {
    Breweries: [],
  }
  componentWillMount() {
    this.getBreweries();
  }
  getBreweries() {
    try {
      //change fetch url
      fetch('http://ec2-35-182-90-15.ca-central-1.compute.amazonaws.com:3000/logs')
      .then(response => {
        let json = response.json();
        json.then(res => {
          this.setState({Breweries: res})
        });
      });
    } catch (e) {
      console.log(e);
    }
  }

  renderBreweries() {
    return (
      <FlatList
        data={this.state.Breweries}
        renderItem={({item}) => 
          <log 		//what is this all about??
            key={item.id}
            log={item}
            deleteLog={this.getLogs.bind(this)}
          />
        }
        keyExtractor={(item, index) => item.id}
      />
    );
  }

    render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <View style={{flex:2, backgroundColor:'black', alignItems:'center', justifyContent:'center',marginHorizontal:2,}}>
            <Text style={styles.headerText}>BreweryName</Text>
          </View>
          <View style={{flex:1, backgroundColor:'black', alignItems:'center', justifyContent:'center',marginHorizontal:2,}}>
            <Text style={styles.headerText}>City</Text>
          </View>
        </View>
        <View style={{flex:10}}>
          {this.renderLogs()}
        </View>
      </View>
    );
  }		
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf:'stretch',
    backgroundColor: 'white',
    padding:2,
  },
  headerRow: {
      flex:1,
      flexDirection:'row',
      marginBottom:2,
  },
  headerText: {
    color:'white',
    fontSize:16,
    fontFamily:'franklin',
  }
});