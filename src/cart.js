import React from "react";
import CartItem from "./Cartitem";

class Cart extends React.Component{
    constructor (){

        super();
        this.state ={
         
            products :[
                {   
                price: 1099,
                title : 'Mobile Phone',
                qty : 1,
                img : '',
                id: 1
            },   
            {
            price: 10099,
            title : 'Fax Machine',
            qty : 41,
            img : '',
            id: 2
        },  
            { price: 169,
            title : 'SOAP',
            qty : 14,
            img : '',
            id: 3
        }
        ]
        // this.increaseQuantity = this.increaseQuantity.bind(this)
    }}


    handleIncreaseQuantity =(product)  =>  {
        console.log('Heyy!! Please Increase the qty of ', product);
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty +=1;
        this.setState({
            products
        })
    }

    handleDecreaseQuantity =(product)  => {
        console.log('Decrease functionality',product);
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty==0){
            return;
        }
        products[index].qty -=1;
       
        this.setState({
            products
        })
    }

    handleDeleteProduct = (id) => {
        const {products} = this.state;
        const items = products.filter((item)=> item.id !==id);

        this.setState({
            products : items
        })
    }
  
    render()
    {
 const {products} = this.state;
      
        return (
            <div className="cart">
            
            
            {products.map((product)=> {
                return (
                <CartItem 
                product ={product} 
                key={product.id}
                onIncreaseQunatity ={this.handleIncreaseQuantity}
                onDecreaseQunatity ={this.handleDecreaseQuantity}
                onDeleteProduct = {this.handleDeleteProduct}
                  />)
            })}
            
            </div>
            
        );
    }
}

      




export default Cart; 