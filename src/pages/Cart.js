import React, {Component} from 'react';

import{
    StyleSheet,
    Text,
    View,
    TextInput,
    ActivityIndicator,
    AsyncStorage,
    FlatList,
    Dimensions
}from 'react-native';

import Cart from "../model/Cart"
import Item from '../components/Item'

const width = Dimensions.get('screen').width

export default class CartPage extends Component{
    constructor(){
        super();
        this.state = {
            itens: [],
            amount: 0
        }
    }

    componentDidMount(){
        let cart = new Cart();
        let itens = cart.itens
        let amount = cart.getTotal()

        this.setState({itens, amount})
    }

    showItens(){

        const {itens} = this.state
    
        if(!itens.length)return

        const {amount} = this.state

        return (
            <View>
                    <Text style={styles.amount}>Total: {amount}</Text>
            <FlatList
                data={itens}
                keyExtractor={item => item.title}
                renderItem={ ({item}) =>
                    <Item product={item}>

                    </Item>}>
            </FlatList>
            </View>)
    }

    render(){
        return(
            <View style={styles.container}>
                {this.showItens()}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    amount:{
        marginLeft: 10
    },
    container:{
        marginBottom: 10,
    }
         
 });