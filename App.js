import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Left, Right, Body, Title } from 'native-base';
import BreweryListEntry from './components/BreweryListEntry';
import BeerListEntry from './components/BeerListEntry';
import BreweryMap from './pages/BreweryMap';
import BreweryInput from './components/BreweryInput';
import BeerInput from './components/BeerInput';
import BreweryList from './pages/BreweryList';
import BeerList from './pages/BeerList';
import { FloatingAction } from 'react-native-floating-action';

export default class App extends React.Component {
  state = {
    currentPage: 'breweryList',
    currentBreweryId: 0,
  };

  getHeader() {
    switch (this.state.currentPage) {
        case 'breweryList':
            return 'List of Breweries';
        case 'beerList':
            return 'List of Beers';
        case 'breweryInput':
            return 'Enter a Brewery';
        case 'beerInput':
            return 'Enter a Beer';
        default:
            return 'shit\'s broke';
    }
  }

  onHeaderButtonPress() {
    switch (this.state.currentPage) {
        case 'breweryList':
            this.setState({ currentPage: 'breweryInput' });
            break;
        case 'beerList':
            this.setState({ currentPage: 'beerInput' });
            break;
        default:
            return false;
    }
  }
  onHeaderButtonPress = this.onHeaderButtonPress.bind(this);

  onBreweryButtonPress(id) {
    this.setState({ currentPage: 'breweryPage', currentBreweryId: id });
  }

  render() {
    return (
      <Container id="container">
        <Header style={{ backgroundColor: '#751d00',
          justifyContent:'center', alignItems:'center', height: 80 }}>
            <Text style={{ color:'white', fontSize: 25, fontWeight: 'bold' }}>
                {this.getHeader()}
            </Text>
            {(this.state.currentPage === 'beerList' || this.state.currentPage === 'breweryList') &&
            <Button onPress={this.onHeaderButtonPress} style={{ position: 'absolute', right: 10,
              backgroundColor: '#751d00' }}>
                <Text style={{ fontSize:35, color:'white' }}>+</Text>
            </Button>}
        </Header>
        <Content>
          {this.state.currentPage === 'breweryList' && <BreweryList breweryPress={this.onBreweryButtonPress}/>}
          {this.state.currentPage === 'beerList' && <BeerList breweryId='all'/>}
          {this.state.currentPage === 'breweryInput' && <BreweryInput />}
          {this.state.currentPage === 'beerInput' && <BeerInput />}
          {this.state.currentPage === 'breweryPage' && <BreweryPage breweryId={this.state.currentBreweryId}/>}
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: '#751d00'}}>
            <Button onPress={() => this.setState({ currentPage: 'breweryList' })}>
              <Text style={{ color: 'white' }}>Breweries</Text>
            </Button>
            <Button onPress={() => this.setState({ currentPage: 'beerList' })}>
              <Text style={{ color: 'white' }}>Beers</Text>
            </Button>
            <Button style={{ backgroundColor: '#751d00'}} onPress={() => this.setState({ currentPage: 'map' })} active>
              <Text style={{ color: 'white' }}>Map</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
});
