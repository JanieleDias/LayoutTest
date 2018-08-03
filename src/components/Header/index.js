import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Header = (props) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={props.onPress}>
      <Icon name="ios-arrow-back" size={24} style={styles.icon} />
    </TouchableOpacity>
    
    <Text style={styles.title}>Profile</Text>
    <Icon name="ios-more" size={24} style={styles.icon} />
  </View>
);

export default Header;
