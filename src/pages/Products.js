import React, {Component} from 'react';

import{
    StyleSheet,
    Text,
    View,
    FlatList,
    AsyncStorage,
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
        try {
            AsyncStorage.getItem('@StarStore:products').then(result =>{
                if (result){
                    let products = JSON.parse(result)
                    this.setState({products})
                }else{
                    this.getProduct()
                }
            })
          } catch (error) {
            console.warn('Não foi possível carregar os produtos: ');
          }
    }

    async getProduct(){
        try{
            let response = await fetch('https://raw.githubusercontent.com/stone-payments/desafio-mobile/master/products.json')
            let json = await response.json()
            this.setState({products: json})
            AsyncStorage.setItem('@StarStore:products', JSON.stringify(json))
        }catch(error){
            console.warn('Não foi possível carregar os produtos: ' + e);
            this.setState({status: 'ERRO'})
        }
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