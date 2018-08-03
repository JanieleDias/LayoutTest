import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button = ({ style, children, type }) => (
  <TouchableOpacity 
    style={[styles.container, style,
      type ? styles['button-outline'] : {}, ]}
    onPress={() => {}}
  >
    <Text style={[styles.text, type ? styles['text-outline'] : {}, ]}>
     
      { children }
      
    </Text>
  </TouchableOpacity>
);

export default Button;
