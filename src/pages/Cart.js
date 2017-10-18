import React, {Component} from 'react';

import{
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView
}from 'react-native';

import Cart from "../model/Cart"
import Item from '../components/Item'


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
            <ScrollView>
            <FlatList
                data={itens}
                keyExtractor={item => item.title}
                renderItem={ ({item}) =>
                    <Item product={item}>

                    </Item>}>
            </FlatList>
                <Text style={styles.amount}>Total: {amount}</Text>
            </ScrollView>)
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