import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import Header from '../Header';
import SubHeader from '../SubHeader';
import ProductList from '../ProductList';
import Tabs from '../Tabs';

class MainScreen extends Component {
  render() { 
    return (
      <View style={styles.container}>
        <Header
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <ScrollView>
          <SubHeader />
          <ProductList />
          <Tabs />
        </ScrollView>
      </View>
    );
  }
}

export default MainScreen;
