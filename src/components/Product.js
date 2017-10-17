/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('screen').width

export default class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            product: this.props.product
        }
    }

    render() {
        const {product} = this.state

        return (
            <View>
                <Image source={{uri: product.thumbnailHd}}  style={styles.thumbnailHd} />
                <View><Text>Titulo: {product.title}</Text></View>
                <View><Text>Preço: {product.price}</Text></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    thumbnailHd: {
            width: width,
            height: width,
        },
        
});
