import React from 'react';

import { View, Image, Text, } from 'react-native';

import Button from '../Button';

import styles from './styles';

const SubHeader = () => (
  <View style={styles.container}>
    <Image
      style={styles.avatar}
      source={{ uri: 'https://www.visitacasas.com/wp-content/uploads/2009/09/No-m%C3%A1s-Negrito-ideas-para-ponerle-nombres-a-perros-negros.jpg' }}
    />

    <View style={styles.profileInfo}>
      <Text style={styles.name}>Doguinho</Text>
      <Text style={styles.bio}>Lindo e cheiroso</Text>
    
      <View style={styles.buttonContainer}>
        <Button style={styles.firstButton}>Mensagem</Button>
        <Button type="outline">Seguir</Button>
      </View>
    </View>
  </View>
);

export default SubHeader;
