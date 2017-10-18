import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const width = Dimensions.get('screen').width
import Cart from "../model/Cart"

export default class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            product: this.props.product
        }
    }

    
   addCar(){
    const {product} = this.state
    let cart = new Cart()
    cart.add = product

   }

    render() {
        const {product} = this.state

        return (
            <View>
                <TouchableOpacity onPress={this.addCar.bind(this)}>
                    <Image source={{uri: product.thumbnailHd}}  style={styles.thumbnailHd} />
                </TouchableOpacity>
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
