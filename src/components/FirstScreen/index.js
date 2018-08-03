
import React, { Component } from 'react';
import { TouchableOpacity, Text, } from 'react-native';
import styles from './styles';


class FirstScreen extends Component {
  render() { 
    return (
      
      <TouchableOpacity
        onPress={() => {
            this.props.navigation.navigate('Main');
          }
        }
      >
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>
        
    );
  }
}
export default FirstScreen;
