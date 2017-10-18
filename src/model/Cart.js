let instance = null

class Cart {

    constructor(){
        
        if(!instance){
            instance = this
            this.products = []
        }

        return instance
    }

    set add(product){
        this.products.push(product)
    }

    get itens(){
        return this.products
    }
    getTotal(){
        let amount = 0
        this.products.forEach((element)=> {
            amount += element.price
        });
        return amount
    }
}

export default Cart;