import React, {Component} from 'react';

import{
    StyleSheet,
    Text,
    View,
    TextInput,
    ActivityIndicator,
    AsyncStorage,
}from 'react-native';

import Product from '../components/Product'

export default class Search extends Component{
    constructor(){
        super();
        this.state = {
            product : null,
            loading: false,
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

    searchProduct = (text) => {
        if(text.length > 0){
            this.setState({loading: true})

            try{

                product = this.state.products.find((x)=>{
                    if(x.title.toLowerCase() === text.toLowerCase()){
                        return x
                    }
                })
                
                if(!product) throw{};

                this.setState({product: product, loading: false})

            }catch(error){
                this.setState({product: null, loading: false})
            }

        }else{
            this.setState({produtc: null})
        }

    }

    render(){
        return(
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'black', borderWidth: 1}}
                    onChangeText={this.searchProduct}
                    placeholder="Search"
                />

                {
                    this.state.loading &&
                    <ActivityIndicator
                    style={marginTop=20} 
                    size="large"
                    />
                }

                {
                    this.state.product &&
                    <Product product={this.state.product}/>
                }

            </View>
        );
    }
}
