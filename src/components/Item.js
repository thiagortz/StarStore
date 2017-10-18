import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('screen').width

export default class Item extends Component {
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
                <View style={styles.container}>
                    <Image style={styles.poster} resizeMode="contain" source={{uri: product.thumbnailHd}}/>
                    <Text style={styles.title}>{product.title}</Text>
                </View>
                <View style={styles.price}><Text style={styles.title}>Preço: {product.price}</Text></View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
   container:{
      flexDirection:'row',
       marginTop: 5,
       marginBottom: 10,
       paddingTop: 10,
       marginLeft: 10,
       marginRight: 10
   },
   poster:{
       width: 120,
       height: 120,
       borderRadius: 20
   },
   title:{
       marginLeft: 10
   },
   price:{
    flexDirection:'row'
   }
});
