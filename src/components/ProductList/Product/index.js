import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';


const Products = ({product: {image, title, description, price}} ) => (
    <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
    </View>
);

export default Products;