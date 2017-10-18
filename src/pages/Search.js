import React, {Component} from 'react';

import{
    StyleSheet,
    Text,
    View,
    TextInput,
    ActivityIndicator
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
        fetch('https://raw.githubusercontent.com/stone-payments/desafio-mobile/master/products.json')
        .then(resp => resp.json())
        .then(json => this.setState({products: json}))
        .catch(e => {
          console.warn('Não foi possível carregar os produtos: ' + e);
          this.setState({status: 'ERRO'})
        });
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
