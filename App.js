import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import BreweryListEntry from './components/BreweryListEntry';
import BeerListEntry from './components/BeerListEntry';
import BreweryMap from './pages/BreweryMap';
import BreweryInput from './components/BreweryInput';
import BeerInput from './components/BeerInput';

export default class App extends React.Component {
  state = {
    currentPage: 'breweries',
  };

  render() {
    return (
      <Container id="container">
        <Header />
        <Content>
          {this.state.currentPage === 'breweries' && <BreweryInput />}
          {this.state.currentPage === 'beers' && <BeerInput />}
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={() => this.setState({ currentPage: 'breweries' })}>
              <Text>Breweries</Text>
            </Button>
            <Button onPress={() => this.setState({ currentPage: 'beers' })}>
              <Text>Beers</Text>
            </Button>
            <Button onPress={() => this.setState({ currentPage: 'map' })} active>
              <Text>Map</Text>
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
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
});
