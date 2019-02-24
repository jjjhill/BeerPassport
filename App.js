import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Left, Right, Body, Title, Input } from 'native-base';
import { Icon } from 'react-native-elements';
import BreweryListEntry from './components/BreweryListEntry';
import BeerListEntry from './components/BeerListEntry';
import BreweryMap from './pages/BreweryMap';
import BreweryInput from './components/BreweryInput';
import BeerInput from './components/BeerInput';
import BreweryList from './pages/BreweryList';
import BeerList from './pages/BeerList';
import BreweryPage from './pages/BreweryPage';

export default class App extends React.Component {
  state = {
    currentPage: 'breweryList',
    currentBreweryId: 0,
    currentBreweryName: '',
    search: false,
    query: '',
  };

  getHeaderText() {
    switch (this.state.currentPage) {
        case 'breweryList':
            return 'List of Breweries';
        case 'beerList':
            return 'List of Beers';
        case 'breweryInput':
            return 'Enter a Brewery';
        case 'beerInput':
            return 'Enter a Beer';  
        case 'breweryPage':
            return <Text>{this.state.currentBreweryName}</Text>;
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

  onBreweryButtonPress(brewery) {
    this.setState({ search: false, currentPage: 'breweryPage', currentBreweryId: brewery.id, currentBreweryName: brewery.name });
  }
  onBreweryButtonPress = this.onBreweryButtonPress.bind(this);

  onSearchButtonPress() {
    this.setState({search: !this.state.search}, () => {
      this.state.search && this.searchInput.focus();
    });
  }
  onSearchButtonPress = this.onSearchButtonPress.bind(this);

  render() {
    return (
      <Container id="container">
        {this.state.search && 
          <Header style={{ height: 80, paddingTop: 30, backgroundColor: '#751d00', 
            flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button small onPress={this.onSearchButtonPress} style={{ backgroundColor: '#751d00', width: 65, 
              padding: 0, left: 0, flexDirection: 'column', justifyContent: 'center', margin: 0 }}>
              <Icon name="search" color='white' size={40} style={{}}/>
            </Button>
            <TextInput
              ref={ref => this.searchInput = ref}
              placeholder="Search" 
              style={{ color: "white", borderColor: "white", borderWidth: 2, height: 40, flex: 1, 
                paddingLeft: 5, fontSize: 20, margin: 0 }}
              onChangeText={(text) => this.setState({ query: text })}
              value={this.state.query}
              onEndEditing={() => this.setState({ search: false })}/>
            <View style={{ justifyContent: 'flex-start', marginTop: 10 }}>
              <Icon name="close" color='white' size={20} style={{ justifyContent: 'center', alignItems: 'center' }}                  
                onPress={() => this.setState({ query: '' })}/>
            </View>
          </Header>
        }
        {!this.state.search &&
          <Header style={{ height: 80, paddingTop: 30, backgroundColor: '#751d00', justifyContent:'center', 
            alignItems:'center'}}>
            {(this.state.currentPage === 'beerList' || this.state.currentPage === 'breweryList') &&
              <View style={{ backgroundColor: '#751d00', flexDirection: 'row',
                justifyContent:'space-between', alignItems:'center', flex: 1}}>
                  <Button onPress={this.onSearchButtonPress} style={{ backgroundColor: '#751d00' }}>
                      <Icon name='search' color='white' size={40}/>
                  </Button>
                <Text style={{ color:'white', fontSize: 25, fontWeight: 'bold' }}>
                    {this.getHeaderText()}
                </Text>
                  <Button onPress={this.onHeaderButtonPress} style={{ backgroundColor: '#751d00' }}>
                      <Text style={{ fontSize:35, color:'white' }}>+</Text>
                  </Button>
              </View>
            }
            {(!(this.state.currentPage === 'beerList' || this.state.currentPage === 'breweryList')) &&
              <View style={{ backgroundColor: '#751d00', flexDirection: 'row',
                justifyContent:'center', alignItems:'center', width: 400}}>
                <Text style={{ color:'white', fontSize: 25, fontWeight: 'bold' }}>
                    {this.getHeaderText()}
                </Text>
              </View>
            }
          </Header>
        }

        <Content>
          {this.state.currentPage === 'breweryList' && <BreweryList breweryPress={this.onBreweryButtonPress} query={this.state.query}/>}
          {this.state.currentPage === 'beerList' && <BeerList breweryId='all' query={this.state.query}/>}
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
