import React, {Component} from 'react';

import{
    StyleSheet,
    Text,
    View,
    FlatList
}from 'react-native';

import Product from '../components/Product'

export default class Products extends Component{

    constructor(){
        super();
        this.state = {
            products: [],
        }
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/stone-payments/desafio-mobile/master/products.json')
        .then(resp => resp.json())
        .then(json => this.setState({products: json}))
        .catch(e => {
          console.warn('Não foi possível carregar os produtos: ' + e);
          this.setState({status: 'ERRO'})
        });
    }

    render(){
        return(
            <FlatList style={styles.container}
              keyExtractor={item => item.title}
              data={this.state.products}
              renderItem={ ({item}) =>
              <Product product={item}/>}>
            </FlatList>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       marginTop: 20,
    },
  });