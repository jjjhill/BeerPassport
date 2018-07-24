import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import BreweryMap from './pages/BreweryMap';

export default class App extends React.Component {
  state = {
    currentPage: 'beers',
  };

  render() {
    return (
      <Container id="container">
        <Header />
        <Content>
          <Text>{this.state.currentPage}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
