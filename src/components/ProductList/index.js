import React, {Component} from 'react';

import { View } from 'react-native';

import Product from './Product';

import styles from './styles';


export default class index extends Component {
    state = {
        products: [
            {
                id: 1,
                image: 'https://cdn-petz-imgs.stoom.com.br/fotos/1456528911508.jpg',
                title: 'pelucia',
                description: 'pelúci rosa',
                price: 'R$25,00',
            },

            {
                id: 2,
                image: 'https://http2.mlstatic.com/S_11341-MLB20042429618_022014-O.jpg',
                title: 'elefante',
                description: 'elefante azul',
                price: 'R$55,00',
            },

            {
                id: 3,
                image: 'http://petiko-blog-novo.s3.amazonaws.com/wp-content/uploads/2016/05/brinquedos-cachorro-tamanho.jpg',
                title: 'mordedor',
                description: 'mordedor colorido',
                price: 'R$15,00',
            },

            {
                id: 4,
                image: 'https://img.staticbg.com/thumb/view/oaupload/banggood/images/CC/F5/e6d4b2af-7576-4872-b48a-a1157fb00ca2.jpg',
                title: 'bisteca',
                description: 'bisteca de borracha',
                price: 'R$35,00',
            },
        ]
    };




    render () {
        return (
           <View style = {styles.container}>
            { this.state.products.map(product => 

            <Product key={product.id} product = {product}/>
        )}
           </View> 
        );

    }};